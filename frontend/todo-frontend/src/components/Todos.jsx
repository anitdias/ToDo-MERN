export function Todos({todos}){
  return <div>
     {todos.map(function(todo) {
      return <div>
        <hr/>
        <h3 style={{margin:"8px"}}><b>{todo.title}</b></h3>
        <h5 style={{margin:"8px"}}>{todo.description}</h5>
        <button style={{margin:"8px"}}>{todo.complete ==true ? "Completed":"Mark as Completed"}</button>
        <hr/>
            </div>
     
  })}
  </div>
  
}