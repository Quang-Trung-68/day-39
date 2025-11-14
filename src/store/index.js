import { createStore } from "../libs/redux";
import reducer from "./reducer";

const initState = [];

const TodoListStore = createStore(reducer, initState);

export default TodoListStore;
