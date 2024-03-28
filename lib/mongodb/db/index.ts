import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
// The cached variable is used to store the connection and promise to avoid connecting multiple times
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missng");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "events",
      bufferCommands: true,
    });
};
