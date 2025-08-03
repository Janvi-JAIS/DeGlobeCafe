import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: String,
  category: String,
  bestSeller: Boolean,
  image: String, // filename or URL
}, { timestamps: true });

export default mongoose.model("MenuItem", menuItemSchema);
