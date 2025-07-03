import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));

// routes
import taskRouter from "./routes/task.routes.js";

// routes declaration
app.use("/api/tasks", taskRouter);

export { app };
