import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, setTodos }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
            ))}
        </ul>
    );
}

export default TodoList;
