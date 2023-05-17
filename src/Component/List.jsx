import React from "react";

const List = ({ list }) => {
  return (
    <div className="list">
      <div className="heading">{list.heading}</div>
    </div>
  );
};

export default List;
