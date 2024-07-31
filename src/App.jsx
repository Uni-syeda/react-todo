import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm";

function useSemiPersistentState() {
  const existingTodo = JSON.parse(localStorage.getItem("savedTodoList")) ?? [];
  const [todoList, setTodoList] = useState(existingTodo);

  useEffect(() => {
    const todoListString = JSON.stringify(todoList);
    localStorage.setItem("savedTodoList", todoListString);
  }, [todoList]);
  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  }

  function removeTodo(id) {
    const filteredTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodo);
  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
    </>
  );
}

export default App;
