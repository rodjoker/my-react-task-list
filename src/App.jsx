import Headers from './componentes/Headers'
import TaskList from './componentes/Tasklist'


import './App.css'

function App() {

  

  const taskComplete = [
    {id: 1,
    task : "Estudiar Ingles",
    description: "",
    completed: false},

    {id: 2,
    task:  "Hacer Practicas de JS",
    description: "",
    completed: false},

    {id: 3,
    task: "Repasar clases en Ada",
    description: "",
    completed: true},

    {id: 4,
    task: "Realizar el Proyecto Integrador",
    description: "",
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
