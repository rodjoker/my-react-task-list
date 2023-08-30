import React from 'react'

export default function formularios(props) {
 
    const {description, tarea, handleSubmit, handleChange, handleDescription} = props

    return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='add task'
        onChange={handleChange}
        value={tarea}
        />


    <input
        type='text'
        placeholder='add description'
        onChange={handleDescription}
        value= {description}
        />

    <input
    type='submit'
    className='btn'
    value= 'add'
    onClick={handleSubmit}
    /> 

    </form>
  )
}
