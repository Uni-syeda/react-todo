import TodoListItem from "./TodoListItem";
const todoList = [
  { title: "Learn react", id: 0 },
  { title: "Practice", id: 1 },
  { title: "Implement", id: 2 },
];

export default function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}
