import React from "react";
import Task from "./Task";

export default function PlanedTasks({ tasks, setTasks }) {
  return (
    <section className="section">
      <h2 className="section__headline">Planed Tasks:</h2>
      <ul className="section__list">
        {tasks.map((task, index) => (
          <Task key={index} setTasks={setTasks} task={task} />
        ))}
      </ul>
    </section>
  );
}
