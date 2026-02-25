import * as React from 'react';
import { createTask } from '../api/taskApi';
// MUI components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
    

export default function AddTaskPopUp({setIsAdded}) {
    // State to control the dialog visibility
    const [open, setOpen] = React.useState(false);

    // State to hold the new task data
    const [newTask, setNewTask] = React.useState({
        title: "",
        description: "",
        column: "",
        level:"",
    });

    // Mock data for levels and columns
    const levels = ["low", "medium", "high"];
    const columns = ["backlog", "in_progress", "review", "done"];

    // Handlers to open and close the dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // Handler for form submission
    const handleSubmit = async(event) => {
        event.preventDefault();
        createTask(newTask).then((createdTask) => {
            console.log("Task created:", createdTask);
            setOpen(false); // Close the dialog after successful creation
            setIsAdded(true);
        }).catch((error) => {
            console.error("Error creating task:", error);
        });

    };

    return (
        <React.Fragment>
            <Button className='column-button' startIcon={<AddIcon/>} onClick={handleClickOpen} >Add Task</Button>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogContent>
            <form onSubmit={handleSubmit} id="subscription-form">
                <div className="inputFields">
                    <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="title"
                    name="title"
                    label="title"
                    type="text"
                    value={newTask.title}
                    onChange={(e)=>{setNewTask((prev)=>({...prev,title: e.target.value}))}}
                    variant="standard"
                    />
                    <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="description"
                    name="description"
                    label="description"
                    type="text-area"
                    variant="standard"
                    
                    value={newTask.description}
                    onChange={(e)=>{setNewTask((prev)=>({...prev,description: e.target.value}))}}
                    />
                </div>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={newTask.column}
                        fullWidth
                        label="column"
                        onChange={(e)=>{setNewTask(prev => ({...prev,column:e.target.value}))}}
                        >
                        {columns.map((column,index) => {
                            return <MenuItem value={column} key={index}>{column}</MenuItem>
                        })}
                    </Select>
                    <InputLabel id="demo-simple-select-label">Level</InputLabel>
                    <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={newTask.level}
                        label="level"
                        onChange={(e)=>{setNewTask(prev => ({...prev,level:e.target.value}))}}
                        >
                        {levels.map((level) => {
                            return <MenuItem value={level}>{level}</MenuItem>
                        })}
                    </Select>
            </form>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" form="subscription-form">
                Add
            </Button>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    );
}