import React, { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { GoPerson, GoBriefcase } from "react-icons/go";

export default function Task({ setTasks, task }) {
  const [taskClass, setTaskClass] = useState("task");
  const targetRef = useRef(null);

  const observerCallback = (entries) => {
    const [entry] = entries;

    if (entry.className !== "task show") {
      if (entry.isIntersecting) setTaskClass("task show");
    }
  };

  const observerOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
  }, []);

  const handleClick = () => {
    setTasks((tasks) => tasks.filter((item) => item.id !== task.id));
  };
  return (
    <li className={taskClass} ref={targetRef}>
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
