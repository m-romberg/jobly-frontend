import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
/**
 * RoutesList
 *
 * Holds routes for JoblyApp
 *
 * App --> RoutesList --> {Homepage, CompanyList, JobList, CompanyDetails}
 */

function RoutesList() {
  const username = undefined;

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
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </div>;

  return username ? loggedInRoutes : loggedOutRoutes;
}

export default RoutesList;