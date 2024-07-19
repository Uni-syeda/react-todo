import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react"; 
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newList, setNewList] = useState("");
  const [ todoList, setTodoList ] = useState([]);
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddList={setNewList} />
      <p>{newList}</p>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
