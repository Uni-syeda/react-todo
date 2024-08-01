import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react"; 
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [ todoList, setTodoList ] = useState([]);

  function addTodo(newTodo) {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo])
  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
