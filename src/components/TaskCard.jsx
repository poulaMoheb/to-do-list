import React from 'react'
import '../styles/TaskCard.css'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTaskStore } from '../store/useTaskStore'

function TaskCard({task}) {
  const deleteTask = useTaskStore(state => state.deleteTask);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    await deleteTask(task.id);
  }

  return (
    <div className='task-container' draggable onDragStart={handleDragStart}>
        <div className='task-top'>
          <h3>{task.title}</h3>
          <IconButton size="small" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon fontSize="small" className="delete-btn"/>
          </IconButton>
        </div>
        <span>{task.description}</span>
        <p className={`task-status task-status-${task.level}`}>{task.level}</p>
    </div>
  )
}

export default TaskCard