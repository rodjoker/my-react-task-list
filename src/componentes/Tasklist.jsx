import React, { useState } from 'react'
import Task from './Task'



export default function Tasklist({todos,  }) {

  const [value, setValue] = useState ("");
  const [valueDescription, setValueDescription] = useState ();
  const [listaTask, setListaTask] = useState (todos);

  function handleAddTask(){
    
    const newTarea = {
      id: Date.now(),
      tarea : value,
      description: valueDescription,
      completed: false
      }
      setListaTask([...listaTask, newTarea]);
    }

  return (


   <div>

<input
      type='text' 
      placeholder='add description' 
      onChange={(event)=>
            {setValue(event.target.value)}} />

<input
      type='text' 
      placeholder='add description' 
      onChange={(event)=>
            {setValueDescription(event.target.value)}} />

<button onClick={handleAddTask}>add</button> 

     {
      listaTask.map((todo, index) => {
        return(
          <Task key={todo.id} taskName={todo.task}>{index.id}{todo.Task}</Task>
      )} )
      
     }
    </div>
  )
}
