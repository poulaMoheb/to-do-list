import React from 'react'
import TaskCard from './TaskCard'
import '../styles/Column.css'
// MUI components
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { createTask } from '../api/taskApi';

function Column({title, tasks, iconColor}) {


  // Mock function to add a new task
  // const addTaskHandler = async () => {
  //   const newTask = {
  //     id: "1",
  //     title: "Design homepage",
  //     description: "Include hero section and call-to-action buttons",
  //     column: "backlog"
  //   }

  //   try {
  //     const callTask = await createTask(newTask);
  //     console.log("Task created:", createTask);
  //   }
  //   catch (error) {      
  //     console.error("Error creating task:", error);
  //   }
  // }

  
  return (
    <div className='column'>
        <div className="column-header">
            <FiberManualRecordIcon className={`header-icon ${"header-icon " + title === "TO Do"?"header-icon-toDo"
                                                :title==="In Progress"?"header-icon-inProgress"
                                                :title === "In Review"?"header-icon-inReview"
                                                :"header-icon-done"}`} />
            <h4 style={{color: iconColor}}>{title}</h4>
            <span>{tasks.length}</span>
        </div>
        {tasks?.map((task) => {
         return  <TaskCard key={task.id} task={task} />
        })}
        <Button className='column-button' startIcon={<AddIcon/>}  >Add Task</Button>
    </div>
  )
}

export default Column