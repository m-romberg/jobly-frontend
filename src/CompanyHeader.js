/**
* CompanyHeader:
* simple visual elements for the company page header
*
* state:
*     none
*
* props:
*     companyData - {name, logo, description}
* CompanyDetails ==> Company Header
**/

function CompanyHeader ({ companyData }) {
  return (
    <div className="CompanyHeader">
      <h3>{companyData.name}</h3>
      <p>{companyData.description}</p>
    </div>
  )
}

export default CompanyHeader;