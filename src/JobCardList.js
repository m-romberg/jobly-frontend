import JobCard from "./JobCard";

/** JobCardList:
 *
 * takes in list of jobs and renders individual job cards
 *
 * props:
 *    - array of jobs:  [{title, company, salary, equity},...]
 *
 * state:
 *    - none
 *
 * { JobList, CompanyDetails } => JobCardList => JobCard */

function JobCardList() {
  return (
    <div className="JobCardList">
      JobCardList
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}
export default JobCardList;