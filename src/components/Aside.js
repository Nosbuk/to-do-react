import React from "react";
import { GoRepo, GoSearch, GoPerson, GoBriefcase } from "react-icons/go";

export default function Aside({ setMainContent, mainContent }) {
  const handleClick = (e) => {
    setMainContent(e.target.id);
    console.log(e.target.id);
  };
  const resolveBackground = (id) => (mainContent === id ? { backgroundColor: "#d0d0d0" } : { backgroundColor: "transparent" });
  return (
    <aside className="aside">
      <h2 className="aside__headline">Tasks</h2>
      <ul className="aside__list">
        <li style={resolveBackground("planned")} id="planned" onClick={handleClick} className="aside__list__item">
          <GoRepo className="aside__list__icon" size="1.8rem" />
          Planned Tasks
        </li>
        <li style={resolveBackground("search")} id="search" onClick={handleClick} className="aside__list__item">
          <GoSearch className="aside__list__icon" size="1.8rem" />
          Search Tasks
        </li>
        <li style={resolveBackground("work")} id="work" onClick={handleClick} className="aside__list__item">
          <GoBriefcase className="aside__list__icon" size="1.8rem" />
          Work
        </li>
        <li style={resolveBackground("private")} id="private" onClick={handleClick} className="aside__list__item">
          <GoPerson className="aside__list__icon" size="1.8rem" />
          Private
        </li>
      </ul>
    </aside>
  );
}
