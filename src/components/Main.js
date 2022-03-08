import React, { useState, useContext } from "react";
import TaskEditor from "./TaskEditor";
import PlanedTasks from "./PlannedTasks";
import { faker } from "@faker-js/faker";
import nextId from "react-id-generator";
import SearchTasks from "./SearchTasks";
import { MainContentContext } from "../App";

export default function Main() {
  const [mainContent] = useContext(MainContentContext);
  const generateRandomTasks = () => {
    let demoArr = [];
    for (let n = 0; n <= 20; n++) {
      demoArr = [...demoArr, { title: faker.commerce.productName(), category: n % 2 === 0 ? "Work" : "Private", date: faker.date.between("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z"), id: nextId(), description: `${faker.commerce.productDescription()}. `.repeat(2) }];
    }
    return demoArr;
  };

  const [tasks, setTasks] = useState(generateRandomTasks());

  return (
    <main>
      {mainContent === "editor" && <TaskEditor setTasks={setTasks} />}
      {mainContent === "planned" && <PlanedTasks setTasks={setTasks} tasks={tasks} />}
      {mainContent === "search" && <SearchTasks setTasks={setTasks} tasks={tasks} />}
    </main>
  );
}
