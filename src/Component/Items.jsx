import React from 'react'

const Items = ({task}) => {
  return (
    <div className="item" draggable="true">
        <input type="checkbox" id="task" />
        <label htmlFor="task">{task}</label>
      </div>
  )
}

export default Items
