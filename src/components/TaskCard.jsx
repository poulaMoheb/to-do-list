import React from 'react'
import '../styles/TaskCard.css'

function TaskCard({task}) {
  return (
    <div className='task-container'>
        <h3>{task.title}</h3>
        <span>{task.description}</span>
        <p className={`task-status task-status-${task.level}`}>{task.level}</p>
    </div>
  )
}

export default TaskCard