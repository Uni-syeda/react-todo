import { useState } from "react";

export default function AddTodoForm(props) {
 const [todoTitle, setTodoTitle] = useState("");

 function handleTitleChange(event){
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
 }

  function handleAddTodo(event) {
    event.preventDefault();
    const form = event.target;
    console.log(inputValue);
    props.onAddList(inputValue);
    form.reset();
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Enter Todo List</label>
      <input value={todoTitle} onChange={handleTitleChange} name="title" id="todoTitle" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
