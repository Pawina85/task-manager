import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Rebuild Task App</h1>

      <input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
