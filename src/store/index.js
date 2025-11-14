import { createStore } from "../libs/redux";
import reducer from "./reducer";

export const initState = {
  todos: [],
};

import { todoStorage } from "@/helpers/todoStorage";

const TodoListStore = createStore(reducer, todoStorage.get());

export default TodoListStore;
