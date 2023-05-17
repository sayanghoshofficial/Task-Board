import React, { useState } from "react";
import List from "./List";

const Board = () => {
  const [newList, setNewList] = useState([]);


  const createList = () => {
    const list = [...newList];
    list.push({
        heading: `List ${list.length + 1}`,
        Items: [],
      });
    setNewList(list)
  };

  return (
    <div className="board">
        {newList.map((list, index) => (
        <List key={index} heading={list.heading} />
      ))}
      
      <div className="createList">
        <div className="heading">Create New List </div>
        <img src="http://surl.li/hbufu" alt="plus" onClick={createList} />
      </div>
    </div>
  );
};

export default Board;
