import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import ProfileForm from "./ProfileForm";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import { useContext } from "react";
import userContext from "./userContext";

/**
 * RoutesList
 *
 * Holds routes for JoblyApp
 *
 * state:
 *     none
 *
 * props:
 *    login fn
 *    signup fn
 *    logout fn
 *    errorMessages - ["Invalid username/password", ...]
 *
 * context:
 *    username from context used to determine if logged in
 *
 * App -->
 *    RoutesList(if logged in) -->
 *        {Homepage, CompanyList, JobList, CompanyDetails, ProfileForm}
 * App -->
 *    RoutesList(if logged out) --> {Homepage, SignupForm, LoginForm}
 */

function RoutesList({login, signup, logout, errorMessages}) {

  const { username } = useContext(userContext);
  console.log("username in navigation=", username);
  //TODO: update classes to have component name as a class first
  const loggedInRoutes =
    <div className="Routes-loggedIn">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>;

  const loggedOutRoutes =
    <div className="Routes-loggedOut">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/login"
          element={<LoginForm login={login}
          errorMessages={errorMessages}/>}
        />
        <Route
          path="/signup"
          element={<SignupForm signup={signup}
          errorMessages={errorMessages}/>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>;

  return username ? loggedInRoutes : loggedOutRoutes;
}

export default RoutesList;