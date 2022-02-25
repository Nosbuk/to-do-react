import React from "react";
import { HiOutlineX } from "react-icons/hi";
import nextId from "react-id-generator";

export default function TaskEditor({ setTasks, setMainContent }) {
  class Task {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.id = nextId();
    }
  }

  const handleClick = (e) => {
    e.target.className === "task-editor__close-button" && setMainContent("planed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setTasks((tasks) => [new Task(e.target[0].value, e.target[1].value), ...tasks]);
    setMainContent("planed");
  };

  return (
    <section className="task-editor">
      <button onClick={handleClick} className="task-editor__close-button">
        <HiOutlineX />
      </button>
      <form onSubmit={handleSubmit} className="task-editor__form">
        <label htmlFor="title" className="task-editor__form__label">
          Title
        </label>
        <input name="title" type="text" className="task-editor__form__input--title" />
        <label htmlFor="description" className="task-editor__form__label">
          Description
        </label>
        <textarea name="description" id="" cols="30" rows="10" className="task-editor__form__input--description"></textarea>
        <button type="submit" className="task-editor__form__submit-button">
          Add
        </button>
      </form>
    </section>
  );
}
