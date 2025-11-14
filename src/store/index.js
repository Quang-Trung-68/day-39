import { createStore } from "../libs/redux";
import reducer from "./reducer";

export const initState = {
  todos: [],
};

import { todoStorage } from "@/helpers/cartStorage";

const TodoListStore = createStore(reducer, todoStorage.get());

export default TodoListStore;
