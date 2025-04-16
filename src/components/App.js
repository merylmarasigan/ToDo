// import logo from './logo.svg';
import '../App.css';
import Heading from './Heading';
import Input from './Input';
import List from './List';
import {useState} from 'react'

function App() {
  const [tasks,setTasks] = useState(['eat','sleep', 'party'])

  return (
    <div className="App container">
      <Heading/>
      <div className='inputs'>

        <Input taskSetter={setTasks}/>
        <List tasks = {tasks}/>

      </div>
    </div>
  );
}

export default App;