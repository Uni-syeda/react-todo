import TodoListItem from "./TodoListItem";
g
export default function TodoList(props) {
  return (
    <ul>
      {props.todoList.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}
