import express from "express";
import BlogPost from "../models/BlogPost.js";
import auth from "../middleware/authmiddleware.js";

const router = express.Router();

// Create Blog
router.post("/", auth, async (req, res) => {
  try {
    const post = new BlogPost(req.body);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Get All Blogs
router.get("/", async (req, res) => {
  const posts = await BlogPost.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Get Single Blog
router.get("/:id", async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  res.json(post);
});

// Update Blog
router.put("/:id", auth, async (req, res) => {
  const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

// Delete Blog
router.delete("/:id", auth, async (req, res) => {
  await BlogPost.findByIdAndDelete(req.params.id);
  res.json({ msg: "Blog deleted" });
});

export default router;
