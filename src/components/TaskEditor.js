import React from "react";
import { HiOutlineX } from "react-icons/hi";

export default function TaskEditor({ setTasks, setMainContent }) {
  const createTask = (title, category, description) => {
    return { title, category, description };
  };

  const handleClick = (e) => {
    e.target.className === "task-editor__close-button" && setMainContent("planed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setTasks((tasks) => [createTask(e.target[0].value, e.target[1].value, e.target[2].value), ...tasks]);
    setMainContent("planed");
  };

  return (
    <section className="task-editor">
      <button onClick={handleClick} className="task-editor__close-button">
        <HiOutlineX />
      </button>
      <form onSubmit={handleSubmit} className="task-editor__form">
        <label htmlFor="title" className="task-editor__form__label">
          Title:
        </label>
        <input name="title" type="text" className="task-editor__form__input--title" />
        <label htmlFor="category" className="task-editor__form__label">
          Category:
        </label>
        <select name="category" className="task-editor__form__input--category">
          <option value="work">Work</option>
          <option value="private">Private</option>
        </select>

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
