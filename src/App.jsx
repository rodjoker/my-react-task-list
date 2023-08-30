import Headers from './componentes/Headers'
import Formularios from './componentes/Formularios'
import TaskList from './componentes/Tasklist'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  
const [tarea, setTarea] = useState('')
const [description, setDescription] = useState('')
const [listadoTareas, setListadoTareas] = useState([])

function handleSubmit(e) {
  e.preventDefault()

  if(tarea === '') {
    alert('agrega una tarea')
    return
  }
  const newTarea = {
    id: Date.now(),
    tarea : tarea,
    description: description,
    completed: false
    }

   const temporal = [newTarea, ...listadoTareas]
     setListadoTareas(temporal)
     setTarea('')
     setDescription('')
     console.log(listadoTareas)

  }

function handleChange (e) {
  setTarea(e.target.value)
  console.log(tarea)
}

function handleDescription (e) {
  setDescription(e.target.value)
  console.log(description)
}

function onActualizarTarea(objEditarTarea){
  const{id, tarea} = objEditarTarea
  const temp = [...listadoTareas]
  const elemento = temp.find(item => item.id === id)
  elemento.tarea = tarea
}
function onBorrarTarea(id) {
   const temp = listadoTareas.filter(item => item.id !== id)
   setListadoTareas(temp)
}

useEffect (() => {
  localStorage.setItem(tarea, event.target.value)
},[tarea])

  return (
    <>
     <div className='containerPrincipal'>
       <Headers/>
         <div className='containerFormularios'>
           <Formularios 
            description= {description}
            tarea= {tarea}
            handleDescription= {handleDescription}
            handleSubmit= {handleSubmit}
            handleChange= {handleChange} />

         </div>

      <div className='contenedorTareas'>

         <div className='contenedorInfoTareas'>
          
          
          {
            
            listadoTareas.map(tarea => (
              <TaskList 
              onBorrarTarea = {onBorrarTarea}
              onActualizarTarea= {onActualizarTarea}
              key= {tarea.id}
              id= {tarea.id}
              tarea= {tarea}
              description= {description}/>
            ))
          }
           
         </div>

      </div>
     </div>
    </>
  )
}

export default App