import React from 'react'
import TaskCard from './TaskCard'
import '../styles/Column.css'
// MUI components
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddTaskPopUp from './AddTaskPopUp';
function Column({title, tasks, iconColor, setIsAdded}) {



  
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
        <AddTaskPopUp setIsAdded={setIsAdded} />
    </div>
  )
}

export default Column