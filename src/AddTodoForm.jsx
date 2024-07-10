export default function AddTodoForm(props) {
  function handleAddTodo(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const inputValue = input.value;
    console.log(inputValue);
    props.onAddList(inputValue);
    form.reset();
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Enter Todo List</label>
      <input name="title" id="todoTitle" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
