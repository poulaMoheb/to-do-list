import React from 'react'
import '../styles/Navbar.css'
// MUI components
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
function NavBar() {
  return (
    <div className='navBar'>
      <div className="div-icon">
        <DragIndicatorIcon className="icon" />
        <h2>Kanban To Do List</h2>
      </div>
      {/* search Input */}
      <div>
        <Stack spacing={2} direction="row">
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </Stack>     
      </div>
    </div>
  )
}
export default NavBar