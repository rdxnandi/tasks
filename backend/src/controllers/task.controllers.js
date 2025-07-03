import { Task } from "../models/task.model.js";

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const task = await Task.find().sort({ createdAt: -1 });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createTask, getTasks };
