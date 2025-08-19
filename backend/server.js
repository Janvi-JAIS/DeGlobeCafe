import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


import menuRoutes from "./routes/menu.js";


import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blog.js";
import inquiryRoutes from "./routes/inquiries.js";




dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve image files

app.use("/api/menu", menuRoutes); // <-- new route
app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/inquiry", inquiryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.error(err));
