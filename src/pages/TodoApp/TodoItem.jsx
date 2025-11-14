import { useDispatch } from "@/libs/react-redux";
import { ACTIONS } from "@/store/constants";
import PropTypes from "prop-types";
import { useState } from "react";

const TodoItem = ({ id, title, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(title ?? "");
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { id, newValue: editValue } });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(title);
    setIsEditing(false);
  };

  const handleToggleEdit = () => {
    setIsEditing(true);
  };

  const handleToggleCompleted = () => {
    dispatch({ type: ACTIONS.UPDATE_COMPLETED_TODO, payload: id });
  };

  const handleDelete = () => {
    const ok = confirm("Are you sure want to delete this todo: " + title);
    if (ok) dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  return (
    <div className="todo-item-wrapper">
      {!isEditing ? (
        // ------------------ VIEW MODE ------------------
        <div className="todo-item">
          <label className="todo-label">
            <input
              className="todo-checkbox"
              type="checkbox"
              checked={isCompleted}
              onChange={handleToggleCompleted}
            />
            <span className={`todo-title ${isCompleted ? "completed" : ""}`}>
              {title}
            </span>
          </label>
          <button className="todo-delete-btn" onClick={handleDelete}>
            Delete
          </button>
          <button className="todo-edit-btn" onClick={handleToggleEdit}>
            Edit
          </button>
        </div>
      ) : (
        // ------------------ EDIT MODE ------------------
        <div className="todo-edit-mode">
          <input
            className="todo-edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />

          <div className="todo-edit-actions">
            <button className="todo-save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="todo-cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
};

export default TodoItem;
