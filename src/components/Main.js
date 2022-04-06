import React, { useState, useContext } from "react";
import TaskEditor from "./TaskEditor";
import Task from "./Task";
import { faker } from "@faker-js/faker";
import nextId from "react-id-generator";
import { MainContentContext } from "./MainAppView";

export default function Main() {
  const [mainContent] = useContext(MainContentContext);
  const [search, setSearch] = useState("");

  const generateRandomTasks = (count) => {
    let demoArr = [];
    for (let n = 0; n <= count; n++) {
      demoArr = [...demoArr, { title: faker.commerce.productName(), category: n % 2 === 0 ? "Work" : "Private", date: faker.date.between("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z"), id: nextId(), description: `${faker.commerce.productDescription()}. `.repeat(2) }];
    }
    return demoArr;
  };

  const [tasks, setTasks] = useState(generateRandomTasks(10));

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterTasks = (tasks) => tasks.filter((task) => `${task.title} ${task.description}`.toLowerCase().includes(search.toLowerCase()));

  const resolveHeadline = (content) => {
    return `${content[0].toUpperCase()}${content.slice(1)}`;
  };

  const tasksToRender = tasks.filter((task) => {
    if (mainContent === "all") return true;
    if (mainContent === "planned") return new Date() < task.date;
    if (mainContent === "late") return new Date() > task.date;
    return mainContent === task.category.toLowerCase();
  });

  return (
    <main>
      {mainContent === "editor" ? (
        <TaskEditor setTasks={setTasks} />
      ) : (
        <section className="section">
          <h2 className="section__headline">{resolveHeadline(mainContent)} Tasks:</h2>
          <input placeholder="Search tasks..." onChange={handleSearch} type="text" className="section__input--search" />
          <ul className="section__list">
            {filterTasks(tasksToRender).map((task, index) => (
              <Task key={index} setTasks={setTasks} task={task} />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
