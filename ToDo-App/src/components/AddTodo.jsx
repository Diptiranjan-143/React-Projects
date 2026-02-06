import { useState } from "react";
import "./AddTodo.css";

function AddTodo({ setTodos }) {
    const [text, setText] = useState("");

    const addTodo = () => {
        if (!text.trim()) return;

        setTodos(prev => [
            ...prev,
            { id: Date.now(), text, completed: false }
        ]);
        setText("");
    };

    return (
        <div className="add-todo-container">
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyPress={e => e.key === "Enter" && addTodo()}
                placeholder="Add a new todo..."
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default AddTodo;
