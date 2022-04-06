import React, { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { GoBell, GoCalendar } from "react-icons/go";
import Icon from "./Icon";
import { CategoriesContentContext } from "./MainAppView";

export default function Task({ setTasks, task }) {
  const [categories] = useContext(CategoriesContentContext);
  const handleClick = () => {
    setTasks((tasks) => tasks.filter((item) => item.id !== task.id));
  };
  const isExpired = (date) => new Date() > date;

  const resolveIconName = () => categories.filter((category) => category.name === task.category)[0]["icon"];
  return (
    <li className="task show">
      <div className="task__title">
        <Icon size="1.6rem" className="task__title__icon" name={resolveIconName()} />
        <h3>{task.title}</h3>
        <button className="task__delete-button" onClick={handleClick}>
          <HiOutlineTrash size="1rem" />
        </button>
      </div>
      <p className="task__date">
        {task.date.toLocaleDateString()}
        {isExpired(task.date) ? <GoBell className="task__date__icon late" size="1.3rem" tooltip="late" /> : <GoCalendar className="task__date__icon planned" size="1.3rem" />}
      </p>
      <p className="task__description">{task.description}</p>
    </li>
  );
}
