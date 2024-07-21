import { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    const form = event.target;
    const newTodo = {
      title: todoTitle,
      id: Gate.now(),
    };

    onAddTodo(newTodo);
    setTodoTitle("");
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Enter Todo List</label>
      <input
        value={todoTitle}
        onChange={handleTitleChange}
        name="title"
        id="todoTitle"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
