import React from "react";

export default function TaskEditor({ setMainContent }) {
  const handleClick = () => {
    setMainContent("planed");
  };
  return (
    <div className="task-editor">
      <button onClick={handleClick} className="text-editor__button__close">
        close
      </button>
    </div>
  );
}
