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
*/

function CompanyList() {
  console.log("CompanyList Ran");
  const [companies, setCompanies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currFilter, setCurrFilter] = useState("");
  console.log("CompanyList state", companies, isSearching, currFilter);

  //on first render, displays all companies
  useEffect(function fetchCompaniesOnLaunch() {
    async function getCompanies() {
      if (currFilter === "") {
        setIsSearching(true);
        const companies = await JoblyApi.getAllCompanies();
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

  if (isSearching === true) {
    return <h1>I am searching for companies...</h1>;
  }

  /** Update with search term and trigger rerender of company list */
  function handleCompanySearch(searchTerms) {
    console.log("handleCompanySearch ran");
    console.log("searchTerms in handleCOmpanySearch fn", searchTerms);
    setCurrFilter(searchTerms);
  }

  //if currently looking for companies, show loading page

  //display valid companies and keep currfilter in searchbox

  return (
    <div className="CompanyList">
      <SearchForm
          handleSearch={handleCompanySearch}
          currSearchTerms={currFilter}
      />
      <CompanyCardList companies={companies} />
    </div>
  );
}

export default CompanyList;