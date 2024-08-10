import Logo from "../../elements/logo/Logo";
import "./Password.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../elements/button/Button";
function Password() {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    if (email === "") {
      event.preventDefault();
      alert("Please, fill in the field!");
    } else {
      alert(`New credentials will be sent to ${email}`);
    }
  };
  return (
    <div className="password-container">
      <Logo />
      <h3 className="forgot-password-title">Forgot Password?</h3>
      <p className="forgot-password-text">
        Enter your email address to request a new password
      </p>
      <form
        className="forgot-password-form"
        action="/password-reset"
        onSubmit={handleSubmit}
      >
        <label className="label" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="user@mail.com"
        />
        <Button
          content="Reset password"
          type="submit"
          class="forgot-password-button"
        />
      </form>
      <Link className="forgot-password-back" to="/login">Back to Login</Link>
    </div>
  );
}

export default Password;
