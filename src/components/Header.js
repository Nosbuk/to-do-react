import React from "react";
import { GiBookPile } from "react-icons/gi";

export default function Header({ setMainContent }) {
  const handleClick = () => {
    setMainContent("editor");
  };
  return (
    <header className="header">
      <GiBookPile className="header__icon" size="3rem" />
      <h1 className="header__text">Task Manager</h1>
      <button onClick={handleClick} className="button">
        Add Task
      </button>
    </header>
  );
}
