import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import Todos from './Components/Todos';
import Form from './Components/Form';

function App() {

  const url= "http://localhost:4001/tasks"

  const [tasks,setTasks]=useState ([])

  useEffect(()=>{
    fetch (url).then (res=>res.json()).then(data=>setTasks(data))
  },[])
  // console.log (tasks)

  
  const addTask= (data)=>{
    fetch (url,{
      method:"POST",
      headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
    })
    .then (res=>res.json())
    .then ((newTaskLists)=>setTasks ([...tasks,newTaskLists]))
    // const newTasks=[...tasks,data]
    // setTasks(newTasks)
  }

  const deleteTask=(id)=>{
    const updatedTasks=tasks.filter ((updteTask)=>updteTask.id !== id)
    fetch (`${url}/${id}`,{
      method :"DELETE",
    })
    .then ((res)=>res.json())
    .then (()=>setTasks(updatedTasks))
  }
  const task=tasks.map (task=>{
    return <Todos task={task} key={task.id} addTask={addTask} deleteTask={deleteTask}/>
  })
  

  return (
    <div className='App'>
    <Form addTask={addTask}  />
    {task}
    </div>
  );
}

export default App;
