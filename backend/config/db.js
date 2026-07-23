import mongoose from "mongoose";

export async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn(
      "MONGODB_URI is not set. Backend started without a database connection."
    );
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("DB CONNECTED");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed:", error?.message || error);
    return false;
  }
}
