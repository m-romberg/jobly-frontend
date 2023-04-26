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

  return (
    <div className="CompanyCard">
      <h4>{companyData.name}</h4>
      {companyData.logoUrl
        &&
        <img src={companyData.logoUrl} alt={companyData.name}></img>}
      <p>{companyData.description}</p>
    </div>
  );
}

export default CompanyCard;
