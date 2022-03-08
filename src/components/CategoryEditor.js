import React, { useContext, useState } from "react";
import { CategoriesContentContext } from "../App";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Icon from "./Icon";
import { HiOutlineX } from "react-icons/hi";

export default function CategoryEditor({ setCategoryEditor }) {
  const options = [
    {
      type: "group",
      items: [
        {
          value: "Project",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="Project" />,
        },
        {
          value: "Organization",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="Organization" />,
        },
        {
          value: "Tools",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="Tools" />,
        },
      ],
    },
    {
      type: "group",
      items: [
        {
          value: "Person",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="Person" />,
        },
        {
          value: "Briefcase",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="Briefcase" />,
        },
        {
          value: "Beaker",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="Beaker" />,
        },
      ],
    },
    {
      type: "group",
      items: [
        {
          value: "DeviceCamera",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="DeviceCamera" />,
        },
        {
          value: "Compare",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="Compare" />,
        },
        {
          value: "Rocket",
          label: <Icon size="2rem" className="category-editor__dropdown__icon" name="Rocket" />,
        },
      ],
    },
  ];
  const [icon, setIcon] = useState("");
  const [categories, setCategories] = useContext(CategoriesContentContext);
  const createCategory = (name, icon) => ({
    name,
    icon,
  });

  const handleClick = () => {
    setCategoryEditor(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick();
    setCategories([...categories, createCategory(event.target[0].value, icon)]);
  };

  return (
    <aside className="aside category-editor">
      <button onClick={handleClick} className="category-editor__close-button">
        <HiOutlineX />
      </button>

      <h2 className="aside__headline">Add new category:</h2>
      <form onSubmit={handleSubmit}>
        <label className="category-editor__label">Name:</label>
        <input className="category-editor__input" type="text" name="category" />
        <label className="category-editor__label">Icon:</label>

        <Dropdown onChange={(option) => setIcon(option.value)} options={options} placeholder="" />
        <input className="category-editor__submit-button" type="submit" value="+ Add" />
      </form>
    </aside>
  );
}
