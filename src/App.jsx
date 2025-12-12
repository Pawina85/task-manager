import { useState } from "react";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager App</h1>

      <TaskForm onAddTask={addTask} />

      <pre>{JSON.stringify(tasks, null, 2)}</pre> {/* temporary display */}
    </div>
  );
}
