import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, deleteToDo, updateMode }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <div>
          <BiEdit className="icon" onClick={updateMode} />
        </div>

        <div>
          <AiFillDelete className="icon" onClick={deleteToDo} />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
