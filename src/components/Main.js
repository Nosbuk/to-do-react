import React, { useEffect, useState } from "react";
import TaskEditor from "./TaskEditor";
import PlanedTasks from "./PlannedTasks";
import { faker } from "@faker-js/faker";
import nextId from "react-id-generator";
import SearchTasks from "./SearchTasks";

export default function Main({ mainContent, setMainContent }) {
  useEffect(() => {
    window.history.replaceState(null, "", mainContent);
  });

  const generateRandomTasks = () => {
    let demoArr = [];
    for (let n = 0; n <= 20; n++) {
      demoArr = [...demoArr, { title: faker.commerce.productName(), category: n % 2 === 0 ? "work" : "private", id: nextId(), description: `${faker.commerce.productDescription()}. `.repeat(2) }];
    }
    console.log(demoArr);
    return demoArr;
  };

  const [tasks, setTasks] = useState(generateRandomTasks());

  return (
    <main>
      {mainContent === "editor" && <TaskEditor setTasks={setTasks} setMainContent={setMainContent} />}
      {mainContent === "planned" && <PlanedTasks setTasks={setTasks} tasks={tasks} />}
      {mainContent === "search" && <SearchTasks setTasks={setTasks} tasks={tasks} />}
    </main>
  );
}
