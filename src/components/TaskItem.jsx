export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        margin: "5px 0",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: task.completed ? "#f0f8f0" : "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          style={{ marginRight: "10px" }}
        />
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#666" : "#000",
          }}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDeleteTask(task.id)}
        style={{
          backgroundColor: "#ff4757",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}
