import { useSelector } from "@/libs/react-redux";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

import "./todo.css";

export default function TodoApp() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-app">
      <h2 className="todo-header">Todo List</h2>

      <AddTodo />

      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
        <div className="todo-empty">The todo list is empty.</div>
      )}
    </div>
  );
}
