import { useDispatch, useStore } from "@/libs/react-redux";
import { ACTIONS } from "@/store/constants";
import { useState } from "react";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: value,
      isCompleted: false,
    };
    console.log(value, newTodo);
    dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo });
    setValue("");
  };
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
};

export default function TodoApp() {
  const dispatch = useDispatch();
  const state = useStore();

  console.log(state.getState());
  return (
    <>
      <AddTodo />
      <button onClick={() => dispatch({ type: "test" })}>Test</button>
    </>
  );
}
