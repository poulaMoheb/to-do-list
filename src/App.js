import { useEffect, useState } from 'react';
import './App.css';
import Column from './components/Column';
import NavBar from './components/NavBar';
import { fetchTasks } from './api/taskApi';
import { useTaskStore } from './store/useTaskStore';

function App() {
  const columnTitles = ["To Do", "In Progress", "In Review", "Done"]; 

  const tasks = useTaskStore((state) => state.tasks);
  const setTasks = useTaskStore((state) => state.setTasks);
  const searchQuery = useTaskStore((state) => state.search);
  const filteredTasks = useTaskStore((state) => state.filteredTasks);
  const todoTasks = filteredTasks().filter((task)=> task.column === "backlog");
  const inProgressTasks = filteredTasks().filter((task)=> task.column === "in_progress");
  const inReviewTasks = filteredTasks().filter((task)=> task.column === "review");
  const doneTasks = filteredTasks().filter((task)=> task.column === "done");
  const [isAdded, setIsAdded] = useState(false);

  
  useEffect(() => {
    const getTasks = async () => {
      try {
        const allTasks = await fetchTasks();
        setTasks(allTasks);
      }
      catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    getTasks();
    setIsAdded(false);
  }, [isAdded === true]);

  
  
  return (
    <div className="App">
      <NavBar />
      <div className='columns'>
        {columnTitles.map((title, index)=>{
          let filteredTasks = [];
          title === "To Do" ? filteredTasks = todoTasks:
          title === "In Progress" ? filteredTasks = inProgressTasks:
          title === "In Review" ? filteredTasks = inReviewTasks
          : filteredTasks = doneTasks
          return <Column key={index} title={title} setIsAdded={setIsAdded} tasks={filteredTasks} />
        })}
      </div>
    </div>
  );
}

export default App;
