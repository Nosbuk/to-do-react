import React, { useEffect, useState } from "react";
import Task from "./Task";

export default function SearchTasks({ tasks, setTasks }) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTasks = (tasks) => tasks.filter((task) => `${task.title} ${task.description}`.toLowerCase().includes(search.toLocaleLowerCase()));
  return (
    <section className="section">
      <h2 className="section__headline">Search Tasks:</h2>
      <input onChange={handleSearch} type="text" className="section__input--search" />
      <ul className="section__list">
        {filterTasks(tasks).map((task, index) => (
          <Task key={index} setTasks={setTasks} task={task} />
        ))}
      </ul>
    </section>
  );
}
