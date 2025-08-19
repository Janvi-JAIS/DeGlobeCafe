import express from "express";
import multer from "multer";
import MenuItem from "../models/MenuItem.js";
import auth from "../middleware/authmiddleware.js";

const router = express.Router();

// File upload config (for images)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// ---------------- CRUD ---------------- //

// Create a new menu item (Admin only)
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, category, featured, available } = req.body;

    const menuItem = new MenuItem({
      name,
      description,
      price,
      category,
      featured,
      available,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await menuItem.save();
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Get all menu items (Public)
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Get single item (Public)
router.get("/:id", async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Update menu item (Admin only)
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const updates = { ...req.body };
    if (req.file) updates.image = `/uploads/${req.file.filename}`;

    const item = await MenuItem.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Delete menu item (Admin only)
router.delete("/:id", auth, async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ msg: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

export default router;
