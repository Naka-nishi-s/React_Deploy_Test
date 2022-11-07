import React, { useState } from "react";
import TaskList from "./TaskList";
import AddForm from "./AddForm";

const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const addList = () => {
    const updateList: any = [...list];
    updateList.push(text);
    setList(updateList);
    setText("");
    console.log(list);
  };

  return (
    <div>
      <TaskList />
      <AddForm text={text} setText={setText} onClick={() => addList()} />
      {list.map((elm, index): any => (
        <li key={index}>{elm}</li>
      ))}
    </div>
  );
};

export default Todo;
