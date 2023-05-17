import React, { useRef, useState } from "react";
import Items from "./Items";

const List = ({ heading }) => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const createTask = () => {
    const newTask = inputRef.current.value;
    setTasks([...tasks, newTask]);
    inputRef.current.value = ""; // Clear the input field after creating the task
  };

  return (
    <>
    <form>
        <input type="text" value={inputRef}/>
    </form>
    <div className="list">
      <div className="heading">
        {" "}
        {heading}
        <img src="http://surl.li/hbufu" alt="plus" onClick={createTask} />
      </div>
      {tasks.map((m,i)=>
      (<Items task={m}/>))}
      <Items task={"Test Task 1"} />
      <Items task={"Test Task 2"} />
    </div>
    </>
    
  );
};

export default List;
