import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task..."
        className="task-input"
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;