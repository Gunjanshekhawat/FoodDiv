import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url=process.env.mongodb_url
export const connectDB = async () => {
  await mongoose.connect(url)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
    });
};
