import { todoStorage } from "@/helpers/cartStorage";
import { ACTIONS } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      const newTodos = [...state.todos, action.payload];

      todoStorage.set({ ...state, todos: newTodos });
      return { ...state, todos: newTodos };
    }
    case ACTIONS.UPDATE_COMPLETED_TODO: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else return todo;
      });

      todoStorage.set({ ...state, todos: newTodos });
      return { ...state, todos: newTodos };
    }
    case ACTIONS.EDIT_TODO: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.newValue };
        } else return todo;
      });

      todoStorage.set({ ...state, todos: newTodos });
      return { ...state, todos: newTodos };
    }
    case ACTIONS.DELETE_TODO: {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);

      todoStorage.set({ ...state, todos: newTodos });
      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
};

export default reducer;
