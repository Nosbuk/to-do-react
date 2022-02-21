import React from "react";
import { GoRepo, GoSearch, GoPerson, GoBriefcase } from "react-icons/go";

export default function Aside({ setMainContent, mainContent }) {
  const handleClick = (e) => {
    setMainContent(e.target.id);
    console.log(e.target.id);
  };
  return (
    <aside className="aside">
      <h2 className="aside__headline">Tasks</h2>
      <ul className="aside__list">
        <li style={mainContent === "planed" ? { backgroundColor: "#d0d0d0" } : { backgroundColor: "transparent" }} id="planed" onClick={handleClick} className="aside__list__item">
          <GoRepo className="aside__list__icon" size="1.8rem" />
          Planned Tasks
        </li>
        <li style={mainContent === "search" ? { backgroundColor: "#d0d0d0" } : { backgroundColor: "transparent" }} id="search" onClick={handleClick} className="aside__list__item">
          <GoSearch className="aside__list__icon" size="1.8rem" />
          Search Tasks
        </li>
        <li style={mainContent === "work" ? { backgroundColor: "#d0d0d0" } : { backgroundColor: "transparent" }} id="work" onClick={handleClick} className="aside__list__item">
          <GoBriefcase className="aside__list__icon" size="1.8rem" />
          Work
        </li>
        <li style={mainContent === "private" ? { backgroundColor: "#d0d0d0" } : { backgroundColor: "transparent" }} id="private" onClick={handleClick} className="aside__list__item">
          <GoPerson className="aside__list__icon" size="1.8rem" />
          Private
        </li>
      </ul>
    </aside>
  );
}
