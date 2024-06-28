import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const todoList = [
    { title: "learn react", id: 0 },
    { title: "Practice", id: 1 },
    { title: "Implement", id: 2 },
  ];

  return (
    <>
      <h1>Todo list</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
