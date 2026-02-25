import './App.css';
import Column from './components/Column';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='columns'>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
      </div>
    </div>
  );
}

export default App;
