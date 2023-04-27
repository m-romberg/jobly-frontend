import { useState } from "react";
import "./SignupForm.css";
import Alert from "./Alert";

/** SignupForm
 *
 * Show SignUp Form
 *
 * state:
 *      - formData
 *      - alertMessages ["some alert", ...]
 *
 * props:
 *      - handleSignup fn passed down from App
 *
 * RoutesList --> SignupForm --> Alert
 */

function SignupForm({ handleSignup }) {
  console.log("SignupForm ran");
  const initialState = {
    username: "test2",
    password: "password2",
    firstName: "test2fn",
    lastName: "test2ln",
    email: "test2@email.com"
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
    handleSignup(formData);
  }
  return (
    <div className="SignupForm">
      <form className="SignupForm-form" onSubmit={handleSubmit}>
        <div className="SignupForm-username">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter a username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div className="SignupForm-password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter a password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="SignupForm-firstName">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            name="firstName"
            className="form-control"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div className="SignupForm-firstName">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            className="form-control"
            placeholder="Enter your last name"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div className="SignupForm-email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        {/**alertMessages && alertMessages.map(m => <Alert message={m} />)*/}
        <button className="SignupForm-btn">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;