import Headers from './componentes/Headers'
import TaskList from './componentes/Tasklist'
import { useState } from 'react'

import './App.css'

function App() {
  const taskComplete = [
    {id: 1,
    task : "Estudiar Ingles",
    completed: false},

    {id: 2,
    task:  "Hacer Practicas de JS",
    completed: false},

    {id: 3,
    task: "Repasar clases en Ada",
    completed: true},

    {id: 4,
    task: "Realizar el Proyecto Integrador",
    completed: false} 
   ]


  return (
      <div className='container'>
        <Headers className= 'encabezado' />
        <TaskList className= 'tareas' todos={taskComplete}/>
        
      </div>
      
  )
}

export default App
