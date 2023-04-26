import React from "react";
import { Route, Routes } from "react-router-dom";
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
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default RoutesList;