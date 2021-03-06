import React, { useRef, useState } from "react";
import { GiBookPile } from "react-icons/gi";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      if (currentUser) {
        navigate("/");
      }
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <main className="sign">
      <header className="sign__header">
        <GiBookPile className="header__icon" size="3rem" />
        <h1 className="header__text">Task Manager</h1>
      </header>
      <form className="sign__form" onSubmit={handleSubmit}>
        {error !== "" && <div className="sign__form__popup--error">{error}</div>}
        <label className="sign__form__label">Email:</label>
        <input placeholder="valid email" type="email" id="email" autoComplete="userName" className="sign__form__input--text" ref={emailRef} required />
        <label className="sign__form__label">Password:</label>
        <input placeholder="min 6 char" type="password" autoComplete="new-password" id="password" className="sign__form__input--text" ref={passwordRef} required />
        <label className="sign__form__label">Confirm password:</label>
        <input placeholder="must match" type="password" autoComplete="new-password" id="password-confrim" className="sign__form__input--text" ref={passwordConfirmRef} required />
        <button disabled={loading} type="submit" className="sign__form__input--button">
          Sign Up
        </button>
      </form>
      <div className="sign__swap-link">
        Already have an account? <Link to="/login">Log In!</Link>
      </div>
    </main>
  );
}
