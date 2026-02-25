import React from 'react'
import TaskCard from './TaskCard'
import '../styles/Column.css'
// MUI components
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';

function Column({title, tasks, iconColor}) {
  return (
    <div className='column'>
        <h2 style={{color: iconColor}}>TITLE</h2>
        <TaskCard /> 
        <Button  variant='outlined' startIcon={<AddIcon/>} style={{backgroundColor: iconColor, color: 'white'}}>Add Task</Button>
    </div>
  )
}

export default Column