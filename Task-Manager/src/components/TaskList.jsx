import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onDeleteTask, onToggleComplete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add one above! ✨</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;