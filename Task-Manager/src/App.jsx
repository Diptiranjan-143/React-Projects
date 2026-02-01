import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
    { id: 3, text: 'Deploy to GitHub', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="container">
      <h1 className="app-title">📝 Task Manager</h1>
      <div className="app-card">
        <TaskForm onAddTask={addTask} />
        <div className="stats">
          <span>Total: {totalTasks}</span>
          <span>Completed: {completedTasks}</span>
          <span>Pending: {totalTasks - completedTasks}</span>
        </div>
        <TaskList 
          tasks={tasks} 
          onDeleteTask={deleteTask}
          onToggleComplete={toggleComplete}
        />
        {completedTasks > 0 && (
          <button onClick={clearCompleted} className="clear-btn">
            Clear Completed Tasks
          </button>
        )}
      </div>
    </div>
  );
}

export default App;