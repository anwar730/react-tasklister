import React from 'react'

function Todos({task,deleteTask}) {
    // console.log (task)
    function handleDelete(id){
        deleteTask(id)
    }
  return (
    <div>
      <h1>{task.task}</h1>
      <button onClick={()=>handleDelete(task.id)}>Delete</button>
    </div>
  )
}

export default Todos
