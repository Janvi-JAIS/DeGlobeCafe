import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

// Save inquiry from contact form
router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.json({ msg: "Inquiry submitted", inquiry });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Admin view all inquiries
router.get("/", async (req, res) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });
  res.json(inquiries);
});

export default router;
