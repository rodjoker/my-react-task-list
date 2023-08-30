import React, { useState } from 'react'


export default function TaskList(props) {
    const {tarea, onActualizarTarea, onBorrarTarea} = props
    const [editando, setEditando] = useState (false);
    const [estaCompletada, setEstaCompletada] = useState(false)

    function ModoEdicionActivado(){
      const [valor, setValor] = useState(tarea.tarea);

      function handleChange(e) {
        const text = e.target.value
        setValor(text)
      }
      function handleClick(e) {
         e.preventDefault()

         onActualizarTarea(
          {
            id: tarea.id,
            tarea: valor,
            completed: false
         
          }
         )
         setEditando(false)
      }
      return(
        <>
        
           <input
           type='tex'
           onChange={handleChange}
           value={valor}/>
           
           <button className='btn' 
           onClick={handleClick}>
            GUARDAR
           </button>
           <button className='btn btnBorrar'
           onClick={()=> onBorrarTarea (tarea.id)}>
            BORRAR
           </button>
           
        

        </>
      )
    }
    function ModoEdicionDesactivado() {
      return(
        <>
          <span className= {estaCompletada ? "todoTarea, spanSubrayada" : "todoTarea"}
          onClick={() => setEstaCompletada(!estaCompletada)}> {tarea.tarea} {tarea.description} </span>

<input type='checkbox'/>

           <button className='btn btnEditar'
           onClick={()=> setEditando (true)}>ACTUALIZAR</button>

           <button className='btn btnborrar'
            onClick={()=> onBorrarTarea (tarea.id)}>X</button>
        </>
      )
    }
  return (
    
    <>
     
       <div className='contenedorTarea' id={tarea.id}>
          {
            editando ? <ModoEdicionActivado/>
            : <ModoEdicionDesactivado/>
          }
       </div>
        
      
    </>
  )
}