import { use, useEffect, useState } from 'react';
import './App.css';
import Column from './components/Column';
import NavBar from './components/NavBar';
import { fetchTasks } from './api/taskApi';


function App() {
  const columnTitles = ["To Do", "In Progress", "In Review", "Done"]; 


  const [tasks, setTasks] = useState([]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [inReviewTasks, setInReviewTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  
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
  }, []);

  useEffect(() => {
    tasks.map((task) => {
      if (task?.column === "backlog") {
        setTodoTasks((prev) => [...prev, task]);
      }
      else if (task?.column === "in_progress") {
        setInProgressTasks((prev) => [...prev, task]);
      }
      else if (task?.column === "review") {
        setInReviewTasks((prev) => [...prev, task]);
      }
      else if (task?.column === "done") {
        setDoneTasks((prev) => [...prev, task]);
      }
  })
  },[tasks])
  
  
  return (
    <div className="App">
      <NavBar />
      <div className='columns'>
        {columnTitles.map((title)=>{
          let filteredTasks = [];
          title === "To Do" ? filteredTasks = todoTasks:
          title === "In Progress" ? filteredTasks = inProgressTasks:
          title === "In Review" ? filteredTasks = inReviewTasks
          : filteredTasks = doneTasks
          return <Column key={title} title={title} tasks={filteredTasks} />
        })}
      </div>
    </div>
  );
}

export default App;
