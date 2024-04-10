import { useState } from 'react'
export function CreateTodo(){

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  return <div style={{
    border:"2px solid white",
    borderRadius:"10px",
    margin:"25px",
    padding:"25px",
    boxShadow:"0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)"}}>
   <h2><b>ADD A TO-DO</b></h2>
    <input style={{
      padding:"10px"}} 
      type="text" 
      placeholder="Enter Title"
      onChange={function(e){
        const value = e.target.value;
        setTitle(value);

      }}></input><br></br><br></br>
    <input style={{
      padding:"10px",
      width:"500px"}} 
      type="text" 
      placeholder="Enter Description" 
      onChange={function(e){
        const value = e.target.value;
        setDescription(value);

      }}></input><br></br><br></br>
    <button onClick={function(){
      fetch("http://localhost:3000/createTodos",{
        method: "POST",
        body: JSON.stringify({
          title:title,
          description:description
        }),
        headers:{
          "Content-type":"application/json"
        }
      })
      .then(async function(res){
        const json = await res.json();
        console.log("todo added")
      })
    }}>ADD</button>
  </div>
      
}