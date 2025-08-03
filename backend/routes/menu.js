import express from "express";
import MenuItem from "../models/MenuItem.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Multer storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/menu";
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// GET all menu items
router.get("/", async (req, res) => {
  const items = await MenuItem.find().sort({ createdAt: -1 });
  res.json(items);
});

// POST create a new menu item
router.post("/", upload.single("image"), async (req, res) => {
  const { name, description, price, category, bestSeller } = req.body;
  const image = req.file ? req.file.filename : "";
  const item = new MenuItem({ name, description, price, category, bestSeller, image });
  await item.save();
  res.status(201).json(item);
});

// PUT update menu item
router.put("/:id", upload.single("image"), async (req, res) => {
  const { name, description, price, category, bestSeller } = req.body;
  const updates = { name, description, price, category, bestSeller };

  if (req.file) updates.image = req.file.filename;

  const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, updates, { new: true });
  res.json(updatedItem);
});

// DELETE menu item
router.delete("/:id", async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

export default router;
