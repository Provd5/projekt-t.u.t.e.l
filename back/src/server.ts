import cors from "cors";
import * as dotenv from "dotenv";
import express, { Express } from "express";

import { connectDB } from "./config/mongodb";
import { v1Api } from "./routes/v1";

dotenv.config();
const port = Number(process.env.SERVER_PORT);
const corsOrigin = process.env.CORS_ORIGIN;

export enum StatusCode {
  OK = 200,
  ERROR = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  UNKNOWN_ERROR_MSG = "An unknown error occurred.",
}

connectDB()
  .then(() => console.log("Connected to MongoDB!"))
  .then(() => bootServer())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const bootServer = () => {
  if (!corsOrigin) {
    throw new Error("corsOrigin must be specified");
  }

  const corsOptions = {
    origin: corsOrigin,
    optionsSuccessStatus: 200,
  };

  const app: Express = express();
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use("/v1", v1Api);

  app.listen(port || 4000, () => {
    console.log("Server running");
  });
};
