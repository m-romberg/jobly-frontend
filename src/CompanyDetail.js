import JobCardList from "./JobCardList";
import CompanyHeader from "./CompanyHeader";
import { useParams } from "react-router-dom";
import { useState } from "react";

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
  const [isSearching, setIsSearching] = useState(false);
  const [companyData, setCompanyData] = useState({});

  const { handle } = useParams();

  useEffect(function fetchCompanyOnLaunch() {
    async function getCompany() {
        setIsSearching(true);
        const company = await JoblyApi.getCompany();
        setCompanies(companies);
        setIsSearching(false);
      } else {
        setIsSearching(true);
        const companies = await JoblyApi.getCompaniesLike(currFilter);
        setCompanies(companies);
        setIsSearching(false);
      }
    }
    getCompanies();
  }, [currFilter]);

  return (
    <div className="CompanyDetail">
      <CompanyHeader companyData={companyData}/>
      <JobCardList />
    </div>
  );


}

export default CompanyDetail;