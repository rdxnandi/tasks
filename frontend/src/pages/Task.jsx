import { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore.js";

const Task = () => {
  const [newTask, setNewTask] = useState("");

  const { tasks, addTask, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-7">
      <div className="flex gap-5">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 flex rounded border border-gray-400 lg:w-[400px] focus:outline-green-500"
          placeholder="Add a new task"
        />

        <button
          onClick={handleAddTask}
          className="lg:ml-2 px-5 py-2 lg:py-0 m-auto lg:m-0 bg-green-400 hover:bg-green-500 text-white rounded cursor-pointer focus:outline-none"
        >
          Add
        </button>
      </div>
      <ul className="flex gap-4">
        {tasks.map((task) => (
          <li key={task._id} className="border rounded-md p-5">
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
