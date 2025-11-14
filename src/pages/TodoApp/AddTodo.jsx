import { useDispatch } from "@/libs/react-redux";
import { ACTIONS } from "@/store/constants";
import { useRef, useState } from "react";

const AddTodo = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (value.trim() === "") alert("Please enter a todo item");
    else {
      const newTodo = {
        id: Date.now(),
        title: value,
        isCompleted: false,
      };
      dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo });
    }
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className="todo-add">
      <input
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter your todo..."
        ref={inputRef}
      />
      <button className="todo-add-btn" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
