import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (taskName === "") return;

    await axios.post("http://localhost:5000/tasks", {
      name: taskName
    });

    setTaskName("");
    fetchTasks();
  };

  return (
    <div>
      <h2>Task App</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;