import React, { useState } from "react";
import List from "./List";
import { taskToDo } from "../data/Data";
import Items from "./Items";

const Board = () => {
  const [newList, setNewList] = useState([]);
  const [draggableItem, setDraggableItem] = useState(null);
  const [data, setData] = useState(taskToDo);

  const createList = () => {
    const list = [...newList];
    list.push({
      heading: `List ${list.length + 2}`,
      items: [],
    });
    setNewList(list);
  };

  const handleDragStart = (e, item) => {
    if (newList.length === 0) {
      return;
    }

    const newLists = [...newList];
    const sourceListIndex = newLists.findIndex((list) =>
      list.items.includes(item)
    );
    if (sourceListIndex !== -1) {
      newLists[sourceListIndex].items = newLists[sourceListIndex].items.filter(
        (i) => i !== item
      );
      setNewList(newLists);
    }

    setDraggableItem(item);
  };

  const handleDragEnter = (e, targetListIndex) => {
    e.preventDefault();
    if (draggableItem === null) return;

    const newLists = [...newList];
    const draggedItem = draggableItem;

    let sourceListIndex = -1;
    newLists.forEach((list, index) => {
      if (list.items.includes(draggedItem)) {
        list.items = list.items.filter((item) => item !== draggedItem);
        sourceListIndex = index;
      }
    });

    newLists[targetListIndex].items.push(
      <Items
        task={draggedItem}
        onDragStart={(e) => handleDragStart(e, draggedItem)}
        onDragEnter={(e) => handleDragEnter(e, 0)}
      />
    );

    setDraggableItem(null);
    setNewList(newLists);

    const updatedData = [...data];
    if (sourceListIndex !== -1) {
      updatedData[sourceListIndex].items = newLists[sourceListIndex].items;
    }
    updatedData[targetListIndex].items = newLists[targetListIndex].items;
    setData(updatedData);
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
        <List key={index} list={list} onDragEnter={handleDragEnter} />
      ))}

      <div className="createList">
        <div className="heading">Create New List</div>
        <img src="http://surl.li/hbufu" alt="plus" onClick={createList} />
      </div>
    </div>
  );
};

export default Board;
