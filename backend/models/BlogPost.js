import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: String,
  body: String,
  categories: [String],
  tags: [String],
  featuredImage: String,
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("BlogPost", blogPostSchema);
