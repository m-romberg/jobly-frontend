import { useState } from "react";
import "./ProfileForm.css";
import Alert from "./Alert";

/** ProfileForm
 *
 * Show Profile Form to update user profile information
 * {username, firstname, lastname, email}
 * --shows username, but can't edit it
 *
 * state:
 *    - formData
 *    - alertMessages ["someAlert", ...]
 * props:
 *    - handleEdit fn from App
 *    - initialFormData {username, firstname, lastname, email}
 *
 * RoutesList --> ProfileForm --> Alert
 */

function ProfileForm() {
  console.log("ProfileForm ran");
  return (
    <div className="ProfileForm">Profile form!</div>
  );
}

export default ProfileForm;