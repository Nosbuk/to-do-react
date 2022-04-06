import React, { useContext, useState } from "react";
import { GoRepo, GoCalendar, GoBell } from "react-icons/go";
import { CategoriesContentContext, MainContentContext } from "./MainAppView";
import Icon from "./Icon";
import CategoryEditor from "./CategoryEditor";

export default function Aside() {
  const [categoryEditor, setCategoryEditor] = useState(false);
  const [mainContent, setMainContent] = useContext(MainContentContext);
  const [categories] = useContext(CategoriesContentContext);
  const handleClick = (event) => {
    setMainContent(event.target.id);
  };
  const openCategoryEditor = () => {
    setCategoryEditor(true);
  };
  const resolveBackground = (id) => (mainContent === id ? { backgroundColor: "#dbdbdbf3" } : { backgroundColor: "transparent" });
  return categoryEditor ? (
    <CategoryEditor setCategoryEditor={setCategoryEditor} />
  ) : (
    <aside className="aside">
      <h2 className="aside__headline">Tasks</h2>
      <ul className="aside__list">
        <li style={resolveBackground("all")} id="all" onClick={handleClick} className="aside__list__item">
          <GoRepo className="aside__list__icon" size="1.8rem" />
          All Tasks
        </li>

        <li style={resolveBackground("planned")} id="planned" onClick={handleClick} className="aside__list__item">
          <GoCalendar className="aside__list__icon" size="1.8rem" />
          Planned Tasks
        </li>
        <li style={resolveBackground("late")} id="late" onClick={handleClick} className="aside__list__item">
          <GoBell className="aside__list__icon" size="1.8rem" />
          Late Tasks
        </li>
      </ul>
      <div className="categories-container">
        <h2 className="aside__headline">Categories</h2>
        <button id="addCategory" onClick={openCategoryEditor} className="aside__button--add">
          +
        </button>
      </div>

      <ul className="aside__list">
        {categories.map(({ name, icon }, index) => (
          <li key={index} style={resolveBackground(name.toLowerCase())} id={name.toLowerCase()} onClick={handleClick} className="aside__list__item">
            <Icon size="1.8rem" name={icon} className="aside__list__icon" />
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
