import React from "react";

const Items = ({ task, onDragStart, onDragEnter }) => {
  return (
    <div className="item" draggable="true" onDragStart={onDragStart} onDragEnter={onDragEnter}>
      <input type="checkbox" id="task" />
      <label htmlFor="task">{task}</label>
    </div>
  );
};

export default Items;
