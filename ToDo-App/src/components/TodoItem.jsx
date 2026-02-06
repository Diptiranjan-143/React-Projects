import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ todo, setTodos }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const toggle = () => {
        setTodos(prev =>
            prev.map(t =>
                t.id === todo.id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const remove = () => {
        setTodos(prev => prev.filter(t => t.id !== todo.id));
    };

    const handleEdit = () => {
        if (editText.trim()) {
            setTodos(prev =>
                prev.map(t =>
                    t.id === todo.id ? { ...t, text: editText } : t
                )
            );
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleEdit();
        } else if (e.key === "Escape") {
            handleCancel();
        }
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <div className="edit-container">
                    <input
                        type="text"
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        autoFocus
                        className="edit-input"
                    />
                    <button onClick={handleEdit} className="btn-save">✓</button>
                    <button onClick={handleCancel} className="btn-cancel">✕</button>
                </div>
            ) : (
                <>
                    <span
                        onClick={toggle}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            cursor: "pointer",
                            color: todo.completed ? "#888" : "#000"
                        }}
                        className="todo-text"
                    >
                        {todo.text}
                    </span>
                    <div className="todo-actions">
                        <button onClick={() => setIsEditing(true)} className="btn-edit" title="Edit">✏️</button>
                        <button onClick={remove} className="btn-delete" title="Delete">❌</button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoItem;
