import React from 'react'
import TaskCard from './TaskCard'
import '../styles/Column.css'
// MUI components
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Column({title, tasks, iconColor}) {
  return (
    <div className='column'>
        <div className="column-header">
            <FiberManualRecordIcon className={`header-icon ${"header-icon " + title === "TO Do"?"header-icon-toDo"
                                                :title==="In Progress"?"header-icon-inProgress"
                                                :title === "In Review"?"header-icon-inReview"
                                                :"header-icon-done"}`} />
            <h4 style={{color: iconColor}}>TITLE</h4>
            <span>5</span>
        </div>
        <TaskCard /> 
        <Button className='column-button' startIcon={<AddIcon/>} >Add Task</Button>
    </div>
  )
}

export default Column