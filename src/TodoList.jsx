import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} onRemoveTodo={onRemoveTodo} id={todo.id} />
      ))}
    </ul>
  );
}
