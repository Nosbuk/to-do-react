import React from "react";
import TaskEditor from "./TaskEditor";

export default function Main({ mainContent, setMainContent }) {
  return <main>{mainContent === "editor" && <TaskEditor setMainContent={setMainContent} />}</main>;
}
