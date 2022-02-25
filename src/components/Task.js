import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

export default function Task({ setTasks, task }) {
  const handleClick = () => {
    setTasks((tasks) => tasks.filter((item) => item.id !== task.id));
  };
  return (
    <li className="task">
      <h3 className="task__title">{task.title}</h3>
      <p className="task__description">{task.description}</p>
      <button className="task__delete-button" onClick={handleClick}>
        <HiOutlineTrash size="1.6rem" />
      </button>
    </li>
  );
}
