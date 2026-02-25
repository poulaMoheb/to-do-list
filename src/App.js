import './App.css';
import Column from './components/Column';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='columns'>
        <Column title="To Do"/>
        <Column title="In Progress"/>
        <Column title="In Review"/>
        <Column title="Done"/>
      </div>
    </div>
  );
}

export default App;
