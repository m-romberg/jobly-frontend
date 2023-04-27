import { Navigate } from "react-router-dom";
import { useState } from "react";
import "./CompanyCard.css";

/**
* CompanyCard:
*     visual element for company detail and
*     "button" that navigates to a company's detail page when clicked
*
*  props:
*     - companyData - {name, logoUrl, description}
*  state:
*     - isClicked t/f -if button has been clicked redirect to company page
*
* CompanyCardList ==> {CompanyCard,...} ==> Navigate
*/
//can use Link to make it presentatonal!
//TODO: more helpful to pass everything down individually
function CompanyCard({ companyData }) {
  // console.log("compd=", companyData);
  const [isClicked, setIsClicked] = useState(false);

  if(isClicked === true) {
    return <Navigate to={`/companies/${companyData.handle}`}/>
  }

  /** changes state of isClicked to true */
  function activateIsClicked() {
    setIsClicked(true);
  }

  return (
    <div className="CompanyCard">
        <button className="CompanyCard-button" onClick={activateIsClicked}>
        <h4 className="CompanyCard-name">{companyData.name}</h4>
        <p className="CompanyCard-description">{companyData.description}</p>
        {companyData.logoUrl
          &&
          <img className="CompanyCard-logo"
            src={companyData.logoUrl}
            alt={companyData.name}
          ></img>}
        </button>
    </div>
  );
}

export default CompanyCard;
