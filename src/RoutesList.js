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
 * App --> RoutesList --> {Homepage, CompanyList, JobList, CompanyDetails}
 */

function RoutesList({login, signup, logout}) {

  const { username } = useContext(userContext);
  console.log("username in navigation=", username);

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
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>;

  return username ? loggedInRoutes : loggedOutRoutes;
}

export default RoutesList;