import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react"; 
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [ todoList, setTodoList ] = useState([]);

  function addList(newTodo) {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo])
  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddList={addList} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
