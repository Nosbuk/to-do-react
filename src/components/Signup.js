import React, { useRef } from "react";
import { GiBookPile } from "react-icons/gi";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) return;

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <main className="sign">
      <header className="sign__header">
        <GiBookPile className="header__icon" size="3rem" />
        <h1 className="header__text">Task Manager</h1>
      </header>
      <form className="sign__form" onSubmit={handleSubmit}>
        <label className="sign__form__label">Email:</label>
        <input type="email" id="email" className="sign__form__input--text" ref={emailRef} required />
        <label className="sign__form__label">Password:</label>
        <input type="password" id="password" className="sign__form__input--text" ref={passwordRef} required />
        <label className="sign__form__label">Confirm password:</label>
        <input type="password" id="password-confrim" className="sign__form__input--text" ref={passwordConfirmRef} required />
        <button type="submit" value="Sign Up" className="sign__form__input--button"></button>
      </form>
      <div className="sign__swap-link">Already have an account? Log In</div>
    </main>
  );
}
