import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


import menuRoutes from "./routes/menu.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve image files

app.use("/api/menu", menuRoutes); // <-- new route

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.error(err));
