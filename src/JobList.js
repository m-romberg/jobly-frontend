import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/** JobList
*
* Handle searches and displays jobs
*
* state:
*     jobs:  [{title, company, salary, equity},...]
*     isSearching: t/f, querying to server for jobs list

* JobList ==> { JobCardList,  SearchForm }
*/

function JobList () {
  return (
    <div className="JobList">
      <SearchForm />
      <JobCardList />
    </div>
  )
}

export default JobList;