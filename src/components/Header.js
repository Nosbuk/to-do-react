import React, { useContext, useState } from "react";
import { GiBookPile } from "react-icons/gi";
import { MainContentContext } from "./MainAppView";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function Header() {
  const [, setMainContent] = useContext(MainContentContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const showTaskEditor = () => {
    setMainContent("editor");
  };
  const handleLogut = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <header className="header">
      <GiBookPile className="header__icon" size="3rem" />
      <h1 className="header__text">Task Manager</h1>
      <h2 className="header__text">Current user: {currentUser.email}</h2>
      {error !== "" && <div className="sign__form__popup--error">{error}</div>}

      <button onClick={showTaskEditor} className="button">
        Add Task
      </button>
      <button onClick={handleLogut} className="button">
        Log Out
      </button>
    </header>
  );
}
