import { useState, useContext } from "react";
import "./LoginForm.css";
import Alert from "./Alert";

/* LoginForm
 *
 * Show Login Form
 *
 * state: formData
 * props:
 *    - handleLogin fn passed down from App
 *    - errorMessages ["some alert", ...]
 *
 * RoutesList --> LoginForm --> Alert
 */

function LoginForm({ login, errorMessages }) {
  console.log("LoginForm ran");
  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  console.log("formData", formData);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
  }
  return (
    <div className="LoginForm">
      <form className="LoginForm-form" onSubmit={handleSubmit}>
        <div className="LoginForm-username">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            className="form-control"
            placeholder="username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div className="LoginForm-password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        {errorMessages && <Alert messages={errorMessages} />}
        <button className="LoginForm-btn">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;