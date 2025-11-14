import { ACTIONS } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      console.log(state);
      return [...state, action.payload];
    case ACTIONS.EDIT_TODO:
      return [];
    case ACTIONS.DELETE_TODO:
      return [];
    default:
      state;
  }
};

export default reducer;
