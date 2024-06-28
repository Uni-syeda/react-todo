const todoList = [
  { title: "learn react", id: 0 },
  { title: "Practice", id: 1 },
  { title: "Implement", id: 2 },
];

export default function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
