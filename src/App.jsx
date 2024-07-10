import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react"; 
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newList, setNewList] = useState("");
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddList={setNewList} />
      <p>{newList}</p>
      <TodoList />
    </>
  );
}

export default App;
