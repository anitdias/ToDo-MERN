import { useState,useEffect } from 'react'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import Todos from './components/Todos'
import axios from 'axios';


function App() {
  const [todos,setTodos] = useState([]);
  useEffect(() => {axios.get('http://localhost:3000/listTodos')
  .then(response => {
    // Assuming the todos are directly available in response.data.todos
    setTodos(response.data.listTodos);
  })
})
    
return <div>
    <CreateTodo></CreateTodo>
    <hr></hr>
    <Todos todos={todos}></Todos>
    <hr></hr>
  </div>

  
}

export default App
