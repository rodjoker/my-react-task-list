import React from 'react'
import Task from './Task'

export default function Tasklist({todos}) {
  return (

    <div className='lista'>
     {
      todos.map(todo => <Task taskName={todo.task}/>)
    
     }
    </div>
  )
}
