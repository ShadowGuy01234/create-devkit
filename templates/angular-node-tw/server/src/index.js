import "dotenv/config";
import express from "express";
import cors from "cors";
import apiRouter from "./routes/index.js";
import { env } from "./config/env.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./utils/logger.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(env.port, () => {
  logger.info(`Server running on http://localhost:${env.port}`);
});
