import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { GoPerson, GoBriefcase } from "react-icons/go";

export default function Task({ setTasks, task }) {
  const iconDictionary = {
    work: <GoBriefcase />,
    private: <GoPerson />,
  };
  const TaskIcon = ({ category }) => iconDictionary[category];

  const handleClick = () => {
    setTasks((tasks) => tasks.filter((item) => item.id !== task.id));
  };
  return (
    <li className="task">
      <div className="task__title">
        <TaskIcon className="task__title__icon" category={task.category} />
        <h3>{task.title}</h3>
        <button className="task__delete-button" onClick={handleClick}>
          <HiOutlineTrash size="1.6rem" />
        </button>
      </div>
      <p className="task__description">{task.description}</p>
    </li>
  );
}
