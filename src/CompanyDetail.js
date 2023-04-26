import JobCardList from "./JobCardList";
import CompanyHeader from "./CompanyHeader";
import { useParams } from "react-router-dom";

/**
 *  CompanyDetail
 *
 * get and display company details and jobs
 *
 *  Props:
 *    - none
 *
 *  State:
 *    -isLoading: t/f, querying to server
 *    -companyData : {name, logo, description}
 *
 * RoutesList -> CompanyDetail -> {CompanyHeader, JobCardList}
 */

function CompanyDetail() {
  const { handle } = useParams();

  return (
    <div className="CompanyDetail">
      <CompanyHeader />
      <JobCardList />
    </div>
  );


}

export default CompanyDetail;