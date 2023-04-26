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
  const [currFilter, setCurrFilter] = useState("");
  console.log("CompanyList state", companies, isSearching, currFilter);

  //on first render, displays all companies
  //TODO: rename OnLaunch
  useEffect(function fetchCompaniesOnLaunch() {
    async function getCompanies() {
      if (currFilter === "") {

        try {
          setIsSearching(true);
          const companies = await JoblyApi.getAllCompanies();
          setCompanies(companies);
          setIsSearching(false);
        } catch (error) {
          return (
            <div className="CompanyList">
              <div className="CompanyList-error">
                <b>Sorry, could not find any matching companies.</b>
              </div>
            </div>
          );
        }
      } else {
        setIsSearching(true);
        try {
          const companies = await JoblyApi.getCompaniesLike(currFilter);
          console.log("companies inside get /company/handle", companies);
          setCompanies(companies);
          setIsSearching(false);
        } catch (error) {
          setIsSearching(false);
          return (
            <div className="CompanyList">
              <div className="CompanyList-error">
                <b>Sorry, could not find any matching companies.</b>
              </div>
            </div>
          );
        }
      }
    }
    // setIsSearching(true); //TODO: setFalse once we move return out of useffect
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
      {(companies.length > 0)
        ? <CompanyCardList companies={companies} />
        : "Sorry, no results were found!"}
    </div>
  );
}

export default CompanyList;