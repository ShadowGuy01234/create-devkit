import mongoose from "mongoose";
import { env } from "./env.js";
import { logger } from "../utils/logger.js";

export async function connectDatabase() {
  try {
    await mongoose.connect(env.mongoUri);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.warn(`MongoDB not available: ${error.message}`);
  }
}
