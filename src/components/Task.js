import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { GoPerson, GoBriefcase } from "react-icons/go";

export default function Task({ setTasks, task }) {
  const iconDictionary = {
    work: <GoBriefcase className="task__title__icon" />,
    private: <GoPerson className="task__title__icon" />,
  };
  const TaskIcon = ({ category }) => iconDictionary[category];

  const handleClick = () => {
    setTasks((tasks) => tasks.filter((item) => item.id !== task.id));
  };
  return (
    <li className="task">
      <div className="task__title">
        <TaskIcon category={task.category} />
        <h3>{task.title}</h3>
        <button className="task__delete-button" onClick={handleClick}>
          <HiOutlineTrash size="1rem" />
        </button>
      </div>
      <p className="task__description">{task.description}</p>
    </li>
  );
}
