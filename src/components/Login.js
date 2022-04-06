import React, { useRef, useState } from "react";
import { GiBookPile } from "react-icons/gi";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      if (currentUser) {
        navigate("/");
      }
    } catch (error) {
      setError("Wrong password or email");
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
        <input type="email" id="email" autoComplete="userName" className="sign__form__input--text" ref={emailRef} required />
        <label className="sign__form__label">Password:</label>
        <input type="password" autoComplete="password" id="password" className="sign__form__input--text" ref={passwordRef} required />
        <button disabled={loading} type="submit" className="sign__form__input--button">
          Log In
        </button>
      </form>
      <div className="sign__swap-link">
        Need an account? <Link to="/signup">Sign Up!</Link>
      </div>
    </main>
  );
}
