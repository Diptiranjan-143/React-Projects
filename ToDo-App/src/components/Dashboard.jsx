import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./Dashboard.css";

function Dashboard({ setIsAuth }) {
    const navigate = useNavigate();
    const [todos, setTodos] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("todos"));
        return saved || [];
    });
    const [search, setSearch] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const logout = () => {
        setIsAuth(false);
        navigate("/", { replace: true });
    };

    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            <h2>My Todo List</h2>

            <div className="search-container">
                <input
                    placeholder="Search todo..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <AddTodo setTodos={setTodos} />
            <TodoList todos={filteredTodos} setTodos={setTodos} /> <br />

            <div className="dashboard-header">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Dashboard;
