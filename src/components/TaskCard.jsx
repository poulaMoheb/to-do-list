import React from 'react'
import '../styles/TaskCard.css'

function TaskCard({task}) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className='task-container' draggable onDragStart={handleDragStart}>
        <h3>{task.title}</h3>
        <span>{task.description}</span>
        <p className={`task-status task-status-${task.level}`}>{task.level}</p>
    </div>
  )
}

export default TaskCard