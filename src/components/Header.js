import React, { useContext } from "react";
import { GiBookPile } from "react-icons/gi";
import { MainContentContext } from "../App";

export default function Header() {
  const [, setMainContent] = useContext(MainContentContext);
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
