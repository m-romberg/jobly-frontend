import JobCardList from "./JobCardList";
import CompanyHeader from "./CompanyHeader";
import JoblyApi from "./api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 *  CompanyDetail
 *
 * get and display company details and jobs
 *
 *  Props:
 *    - none
 *
 *  State:
 *    -isSearching: t/f, querying to server
 *    -companyData : {handle, logoUrl, description, jobs, name, numEmployees}
 *
 * RoutesList -> CompanyDetail -> {CompanyHeader, JobCardList}
 */

function CompanyDetail() {
  console.log("Company Detail ran");
  const initialState = {
    handle: "",
    logoUrl: "",
    description: "",
    jobs: [],
    name: "",
    numEmployees: ""
  };
  const [isSearching, setIsSearching] = useState(false);
  const [companyData, setCompanyData] = useState(initialState);
  const [hasErrors, setHasErrors] = useState(false);
  console.log("Company Detail state=", isSearching, "companyData=", companyData);
  console.log("companyData.jobs =", companyData.jobs);
  console.log("hasErrors=", hasErrors);

  const { handle } = useParams();

  useEffect(function fetchCompanyOnLaunch() {
    async function getCompany() {
      try {
        const company = await JoblyApi.getCompany(handle);
        console.log("company in fetchCompanyOnLaunch", company);
        setCompanyData(company);
      } catch (error) {
        console.log("INSIDE CATCH ERROR", error);
        setHasErrors(true);
      }
      setIsSearching(false);
    }
    setIsSearching(true);
    getCompany();
  }, []);

  // setIsSearching(false);

  if (isSearching === true) {
    return <h1>I am searching for companies...</h1>;
  }

  if(hasErrors === true) {
    return (
      <div className="CompanyDetail">
        <div className="CompanyDetail-error">
          <b>Sorry, could not find any matching results.</b>
        </div>
      </div>
    );
  }

  return (
    <div className="CompanyDetail">
      {companyData.jobs.length > 0
        ? <div className="CompanyDetail-body">
          <CompanyHeader companyData={companyData} />
          <JobCardList jobs={companyData.jobs} />
        </div>
        : "Sorry, nothing found."
      }
    </div>
  );
}

export default CompanyDetail;