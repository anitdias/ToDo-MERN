import PropTypes from 'prop-types';
import axios from 'axios';
import {useState} from 'react'


export function Todos(props) {
  const [complete,setCompleted] = useState('Mark as Complete');

  if (!props.todos) {
    return <div>No todos available</div>;
  }
  return (
    <div>
      {props.todos.map(function (todo, index) {
        return (
          <div key={index}>
            <hr />
            <h3 style={{ margin: "8px" }}><b>{todo.title}</b></h3>
            <h5 style={{ margin: "8px" }}>{todo.description}</h5>
            <button style={{ margin: "8px" }} onClick={function (){
  const putData = {
    id:todo._id
  };
  
  axios.put('http://localhost:3000/completed', putData)
    .then(response => {
      setCompleted('Completed');
      console.log('done');
    })

  }}>{todo.completed == true ? 'Completed':'Mark as completed'}</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}


Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired
    })
  )
};


export default Todos;

