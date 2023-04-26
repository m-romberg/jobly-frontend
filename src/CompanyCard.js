import { Navigate } from "react-router-dom";
import { useState } from "react";
/**
* CompanyCard:
*     simple visual element of Company
*
*  props:
*     - companyData - {name, logoUrl, description}
*  state:
*     - none
*
* CompanyCardList ==> {CompanyCard,...}
*/

function CompanyCard({ companyData }) {
  console.log("compd=", companyData);

  const [isClicked, setIsClicked] = useState(false);

  if(isClicked === true) {
    return <Navigate to={`/companies/${companyData.handle}`}/>
  }

  function activateIsClicked() {
    setIsClicked(true);
  }

  return (
    <div className="CompanyCard">
        <button className="CompanyCard-button" onClick={activateIsClicked}>
        <h4>{companyData.name}</h4>
        {companyData.logoUrl
          &&
          <img src={companyData.logoUrl} alt={companyData.name}></img>}
        <p>{companyData.description}</p>
        </button>
    </div>
  );
}

export default CompanyCard;
