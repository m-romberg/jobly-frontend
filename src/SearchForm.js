import { useState } from "react";

/** SearchForm
 *
 * Form to search for companies or jobs
 *
 * props:
 *    - handleSearch
 *
 * state:
 *    - formData
 *
 * {CompanyList, JobList} ==> SearchForm
 */

//TODO: formData could just be searchTerms!
//Blankspace with trim, in handle submit
function SearchForm({ handleSearch, currSearchTerms }) {
  console.log("SearchForm ran");
  console.log("currSearchTerms", currSearchTerms);
  const [formData, setFormData] = useState({ searchTerms: currSearchTerms });
  console.log("formData", formData);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData.searchTerms.trim());
  }
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          id="search-terms"
          name="searchTerms"
          className="form-control"
          placeholder="Enter a search term"
          onChange={handleChange}
          value={formData.searchTerms}
        />
      </div>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;