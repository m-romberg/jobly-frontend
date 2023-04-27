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

function LoginForm() {
  console.log("LoginForm ran");
  return (
    <div className="LoginForm">Login form!</div>
  );
}

export default LoginForm;