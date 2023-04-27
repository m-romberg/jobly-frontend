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
 *      - handleSignUp fn passed down from App
 *
 * RoutesList --> SignupForm --> Alert
 */

function SignupForm() {
  console.log("SignupForm ran");
  return (
    <div className="SignupForm">Signup form!</div>
  );
}

export default SignupForm;