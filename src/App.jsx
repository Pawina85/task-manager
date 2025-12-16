import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
export default function App() {

  return (
    <Router>
      <Navbar />

      {/* <h1>Rebuild Task App</h1>

      <input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p> */}
    </Router>
  );
}
