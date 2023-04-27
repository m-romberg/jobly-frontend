import CompanyCardList from "./CompanyCardList";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import JoblyApi from "./api";

/** CompanyList:
*
* Handle searches and display companies.
*
*
* props:
*     - none
* state:
*     - companies: [{name, logo, description},...]
*     - isSearching: t/f, querying to server
*     - currFilter: string that is currently used to filter
*
* CompanyList => { CompanyCardList, SearchForm }
TODO: reduce use effect by creating piece of state hasErrors
*/

function CompanyList() {
  console.log("CompanyList Ran");
  const [companies, setCompanies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currFilter, setCurrFilter] = useState(undefined);
  const [hasErrors, setHasErrors] = useState(false);
  console.log("CompanyList state", companies, isSearching, currFilter);

  //on first render, displays all companies
  //TODO: rename OnLaunch
  useEffect(function fetchCompaniesOnLaunch() {
    async function getCompanies() {
        try {
          const companies = await JoblyApi.getCompanies(currFilter);
          setCompanies(companies);
        } catch (error) {
          setHasErrors(true);
        }
      setIsSearching(false);
      }
    setIsSearching(true);
    setHasErrors(false);
    getCompanies();
  }, [currFilter]);

  if (isSearching === true) {
    return <h1>I am searching for companies...</h1>;
  }

  /** Update with search term and trigger rerender of company list */
  function handleCompanySearch(searchTerms) {
    console.log("handleCompanySearch ran");
    console.log("searchTerms in handleCOmpanySearch fn", searchTerms);
    setCurrFilter(searchTerms);
  }


  //display valid companies and keep currfilter in searchbox

  return (
    <div className="CompanyList">
      <SearchForm
        handleSearch={handleCompanySearch}
        currSearchTerms={currFilter}
      />
      {((companies.length > 0) && !hasErrors)
        ? <CompanyCardList companies={companies} />
        : "Sorry, no results were found!"}
    </div>
  );
}

export default CompanyList;