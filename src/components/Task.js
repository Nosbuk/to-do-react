import React, { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { GoPerson, GoBriefcase } from "react-icons/go";

export default function Task({ setTasks, task }) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const observerCallback = (entries) => {
    const [entry] = entries;
    console.log("-------------------");
    console.log(entries);
    console.log(entry);
    console.log(entry.isIntersecting);
    console.log("-------------------");

    setIsVisible(entry.isIntersecting);
  };

  const observerOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
  }, [observerOptions]);
  const iconDictionary = {
    work: <GoBriefcase className="task__title__icon" size="1.6rem" />,
    private: <GoPerson className="task__title__icon" size="1.6rem" />,
  };
  const TaskIcon = ({ category }) => iconDictionary[category];

  const handleClick = () => {
    setTasks((tasks) => tasks.filter((item) => item.id !== task.id));
  };
  return (
    <li className={!isVisible ? "task" : "task show"} ref={targetRef}>
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
