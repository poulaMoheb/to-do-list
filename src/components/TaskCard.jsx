import React from 'react'
import '../styles/TaskCard.css'

function TaskCard({status}) {
  return (
    <div className='task-container'>
        <h3>title</h3>
        <span>description</span>
        <p className={`task-status ${"task-status " + status === "High"?"task-status-high"
                                                :status==="Medium"?"task-status-medium"
                                                :"task-status-low"}`}>status</p>
    </div>
  )
}

export default TaskCard