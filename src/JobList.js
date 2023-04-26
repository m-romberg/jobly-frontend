import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import JoblyApi from "./api";


/** JobList
*
* Handle searches and displays jobs
*
* state:
*     jobs:  [{title, company, salary, equity},...]
*     isSearching: t/f, querying to server for jobs list

* JobList ==> { JobCardList,  SearchForm }
*/

function JobList() {
  console.log("JobList Ran");
  const [jobs, setJobs] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currFilter, setCurrFilter] = useState("");
  console.log("JobList state", jobs, isSearching, currFilter);

  //on first render, displays all companies
  useEffect(function fetchJobsOnLaunch() {
    async function getJobs() {
      if (currFilter === "") {
        setIsSearching(true);
        const jobs = await JoblyApi.getAllJobs();
        setJobs(jobs);
        setIsSearching(false);
      } else {
        setIsSearching(true);
        const jobs = await JoblyApi.getJobsLike(currFilter);
        setJobs(jobs);
        setIsSearching(false);
      }
    }
    getJobs();
  }, [currFilter]);

  if (isSearching === true) {
    return <h1>I am searching for jobs...</h1>;
  }

  /** Update with search term and trigger rerender of company list */
  function handleJobSearch(searchTerms) {
    console.log("handleJobSearch ran");
    console.log("searchTerms in handleJobSearch fn", searchTerms);
    setCurrFilter(searchTerms);
  }

  //if currently looking for companies, show loading page

  //display valid companies and keep currfilter in searchbox

  return (
    <div className="JobList">
      <SearchForm
          handleSearch={handleJobSearch}
          currSearchTerms={currFilter}
      />
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default JobList;