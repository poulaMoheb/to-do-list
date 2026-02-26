import React, { useState } from 'react'
import TaskCard from './TaskCard'
import '../styles/Column.css'
import { useTaskStore } from '../store/useTaskStore'
// MUI components
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddTaskPopUp from './AddTaskPopUp';
function Column({title, tasks, iconColor, setIsAdded}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const moveTask = useTaskStore(state => state.moveTask);

  const mapTitleToColumn = (title) => {
    if (title === 'To Do') return 'backlog';
    if (title === 'In Progress') return 'in_progress';
    if (title === 'In Review') return 'review';
    return 'done';
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  }

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const id = e.dataTransfer.getData('text/plain');
    if (!id) return;
    const newColumn = mapTitleToColumn(title);
    await moveTask(id, newColumn);
  }

  return (
    <div className={`column ${isDragOver ? 'drag-over' : ''}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        <div className="column-header">
            <FiberManualRecordIcon className={`header-icon ${"header-icon " + title === "TO Do"?"header-icon-toDo"
                                                :title==="In Progress"?"header-icon-inProgress"
                                                :title === "In Review"?"header-icon-inReview"
                                                :"header-icon-done"}`} />
            <h4 style={{color: iconColor}}>{title}</h4>
            <span>{tasks.length}</span>
        </div>
        {tasks?.map((task,index) => {
         return  <TaskCard key={index} task={task} />
        })}
        <AddTaskPopUp setIsAdded={setIsAdded} />
    </div>
  )
}

export default Column