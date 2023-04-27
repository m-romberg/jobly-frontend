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
  const [currFilter, setCurrFilter] = useState(undefined);
  const [hasErrors, setHasErrors] = useState(false);
  console.log("JobList state", jobs, isSearching, currFilter);
  console.log("hasErrors in joblist=", hasErrors);
  console.log("currFilter is=", currFilter);

  //on first render, displays all companies
  useEffect(function fetchJobsOnLaunch() {
    async function getJobs() {
      try {
        const jobs = await JoblyApi.getJobs(currFilter);
        console.log("jobs after request=", jobs);
        setJobs(jobs);
      } catch (error) {
        setHasErrors(true);
      }
      setIsSearching(false);
    }
    setIsSearching(true);
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
      {jobs.length > 0
        ? <JobCardList jobs={jobs} />
        : "Sorry, no results were found!"}
    </div>
  );
}

export default JobList;