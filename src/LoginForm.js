import { useState } from "react";
import "./LoginForm.css";
import Alert from "./Alert";

/* LoginForm
 *
 * Show Login Form
 *
 * state: formData
 * props:
 *    - handleLogin fn passed down from App
 *    - alertMessages ["some alert", ...]
 *
 * RoutesList --> LoginForm --> Alert
 */

function LoginForm({ handleLogin }) {
  console.log("LoginForm ran");
  const initialState = {
    username: "test",
    password: "password",
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
    handleLogin(formData);
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
        {/**alertMessages && alertMessages.map(m => <Alert message={m} />)*/}
        <button className="LoginForm-btn">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;