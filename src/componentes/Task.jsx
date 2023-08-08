import React from 'react'

export default function Task({taskName, onDeleteItem}){
  

  return (
    <div className='taskN'>
      <input type='checkbox'/>
      {taskName}

      <button className='add-btn'>x</button>
    </div>
  )
}
