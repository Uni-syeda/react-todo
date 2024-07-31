import { useState } from "react";
import { InputwithLabel } from "./InputWithLabel";

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    onAddTodo(newTodo);
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Add todo list!
      </InputWithLabel>

      <button type="submit">Add Todo</button>
    </form>
  );
}
