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
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    return () => observer.unobserve(currentTarget);
  });
  const iconDictionary = {
    Work: <GoBriefcase className="task__title__icon" size="1.6rem" />,
    Private: <GoPerson className="task__title__icon" size="1.6rem" />,
  };
  const TaskIcon = ({ category }) => iconDictionary[category];

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
      <p className="task__description">{task.date.toLocaleDateString()}</p>
      <p className="task__description">{task.description}</p>
    </li>
  );
}
