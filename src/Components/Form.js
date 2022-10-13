import React,{useState} from 'react'

function Form({addTask}) {
    const [newTask,setNewTask]=useState("")

    function handleChange(e){
        setNewTask(e.target.value)
        // console.log (newTask)
    }
    function handleSubmit (e){
        e.preventDefault()
        const formData={
            task :newTask
        }
        // console.log (formData)
        addTask(formData)


    }
  return (
    <div style={{paddingTop:50}}>
        <form onSubmit={handleSubmit}>
      <label for='task'>Task</label>
      <input type="text" value= {newTask} placeholder='Enter Task' onChange={handleChange}/>
      <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default Form
