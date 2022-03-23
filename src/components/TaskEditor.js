import React, { useContext, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import nextId from "react-id-generator";
import { CategoriesContentContext, MainContentContext } from "../App";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import DatePicker from "react-datepicker";
import Dropdown from "react-dropdown";

export default function TaskEditor({ setTasks }) {
  const [startDate, setStartDate] = useState(new Date());
  const [categories] = useContext(CategoriesContentContext);
  const [category, setCategory] = useState("");
  const [, setMainContent] = useContext(MainContentContext);
  const createTask = (title, category, date, description) => {
    return { title, category, date, id: nextId(), description };
  };

  const handleClick = (e) => {
    e.target.className === "task-editor__close-button" && setMainContent("planned");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((tasks) => [createTask(e.target[0].value, category, startDate, e.target[2].value), ...tasks]);
    setMainContent("planned");
  };

  const dropdownOptions = categories.map((category) => category.name);

  return (
    <section className="task-editor">
      <button onClick={handleClick} className="task-editor__close-button">
        <HiOutlineX />
      </button>
      <form onSubmit={handleSubmit} className="task-editor__form">
        <label htmlFor="title" className="task-editor__form__label">
          Title:
        </label>
        <input name="title" type="text" className="task-editor__form__input" />
        <label htmlFor="category" className="task-editor__form__label">
          Category:
        </label>
        <Dropdown onChange={(option) => setCategory(option.value)} options={dropdownOptions} placeholder="Select category" />
        <label htmlFor="date" className="task-editor__form__label">
          Date:
        </label>
        <DatePicker popperPlacement="bottom" className="task-editor__form__input" selected={startDate} onChange={(date) => setStartDate(date)} />{" "}
        <label htmlFor="description" className="task-editor__form__label">
          Description:
        </label>
        <textarea name="description" id="" cols="30" rows="10" className="task-editor__form__input--description"></textarea>
        <button type="submit" className="task-editor__form__submit-button">
          + Add
        </button>
      </form>
    </section>
  );
}
