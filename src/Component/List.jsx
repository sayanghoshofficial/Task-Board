import React from "react";

const List = ({ list, onDragEnter }) => {
  const handleDragEnter = (e) => {
    onDragEnter(e, list); // Pass the list as an argument along with the event
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="list"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="heading">{list.heading}</div>
      {list.items.map((item, index) => (
        <div key={index} className="item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
