import { initState } from "@/store";

export const todoStorage = {
  set(newTodo) {
    localStorage.setItem("your_todos", JSON.stringify(newTodo));
  },
  get() {
    const yourTodos = localStorage.getItem("your_todos");
    return yourTodos ? JSON.parse(yourTodos) : initState;
  },
};
