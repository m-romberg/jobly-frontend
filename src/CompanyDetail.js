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
 *    -companyData : {name, logoUrl, description}
 *
 * RoutesList -> CompanyDetail -> {CompanyHeader, JobCardList}
 */

function CompanyDetail() {
  console.log("Company Detail ran");
  const [isSearching, setIsSearching] = useState(false);
  const [companyData, setCompanyData] = useState({jobs: []});
  console.log("Company Detail state=", isSearching, "companyData=", companyData);
  console.log("companyData.jobs =", companyData.jobs);

  const { handle } = useParams();

  useEffect(function fetchCompanyOnLaunch() {
    async function getCompany() {
      setIsSearching(true);
      const company = await JoblyApi.getCompany(handle);
      console.log("company in fetchCompanyOnLaunch", company);
      setCompanyData(company);
      setIsSearching(false);
    }
    getCompany();
  }, []);

  if (isSearching === true) {
    return <h1>I am searching for companies...</h1>;
  }

  return (
    <div className="CompanyDetail">
      <CompanyHeader companyData={ companyData } />
      <JobCardList jobs={ companyData.jobs } />
    </div>
  );
}

export default CompanyDetail;