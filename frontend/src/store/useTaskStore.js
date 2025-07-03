import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useTaskStore = create((set, get) => ({
  tasks: [],
  fetchTasks: async () => {
    const res = await axiosInstance.get("/");
    const tasks = res.data;
    set({ tasks });
  },

  addTask: async (newTask) => {
    const res = await axiosInstance.post("/", {
      title: newTask,
    });
    set((state) => ({
      tasks: [...state.tasks, res.data],
    }));
    await get().fetchTasks();
  },
}));
