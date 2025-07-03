import { Router } from "express";
import { createTask, getTasks } from "../controllers/task.controllers.js";

const router = Router();

router.route("/").post(createTask);
router.route("/").get(getTasks);

export default router;
