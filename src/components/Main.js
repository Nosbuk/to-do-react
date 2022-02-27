import React, { useState } from "react";
import TaskEditor from "./TaskEditor";
import PlanedTasks from "./PlanedTasks";

export default function Main({ mainContent, setMainContent }) {
  const [tasks, setTasks] = useState([]);
  return (
    <main>
      {mainContent === "editor" && <TaskEditor setTasks={setTasks} setMainContent={setMainContent} />}
      {mainContent === "planed" && <PlanedTasks setTasks={setTasks} tasks={tasks} />}
      {}
    </main>
  );
}
