import React, { useState } from "react";
import List from "./List";
import { taskToDo } from "../data/Data";
import Items from "./Items";

const Board = () => {
  const [newList, setNewList] = useState([]);
  const [draggableItem, setDraggableItem] = useState(null);
  const data = taskToDo;

  const createList = () => {
    const list = [...newList];
    list.push({
      heading: `List ${list.length + 2}`,
      items: [], // Initialize items as an empty array
    });
    setNewList(list);
  };
  

  const handleDragStart = (e, item) => {
    if(newList.length === 0){return}
    setDraggableItem(item);
  };

  const handleDragEnter = (e, targetListIndex) => {
    e.preventDefault(); // Prevent default behavior to enable drop
  
    if (draggableItem === null) return;
  
    const newLists = [...newList];
    const draggedItem = draggableItem;
  
    // Remove the dragged item from its previous list
    const sourceListIndex = newLists.findIndex((list) => list.items.includes(draggedItem));
    if (sourceListIndex !== -1) {
      newLists[sourceListIndex].items = newLists[sourceListIndex].items.filter((item) => item !== draggedItem);
    }
  
    // Add the dragged item to the target list
    newLists[targetListIndex].items.push(draggedItem);
  
    setNewList(newLists);
    setDraggableItem(null);
  };
  
  

  return (
    <div className="board">
      <div className="list">
        <div className="heading">List 1</div>
        {data.map((m, i) => (
          <Items
            task={m.work}
            key={i}
            onDragStart={(e) => handleDragStart(e, m.work)}
            onDragEnter={(e) => handleDragEnter(e, 0)}
          />
        ))}
      </div>
      {newList.map((list, index) => (
        <List key={index} list={list} />
      ))}

      <div className="createList">
        <div className="heading">Create New List </div>
        <img src="http://surl.li/hbufu" alt="plus" onClick={createList} />
      </div>
    </div>
  );
};

export default Board;
