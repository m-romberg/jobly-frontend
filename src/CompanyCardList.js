import CompanyCard from "./CompanyCard";

/**
 * CompanyCardList:
 *
 * takes in a list of companies and renders individual company cards
 *
 * props:
 *    array of companies: [{handle, name, logoUrl, description},...]
 * state:
 *    none
 *
 * CompanyList => CompanyCardList => { CompanyCard,... }
 *
 */

function CompanyCardList({ companies }) {
  console.log("CompanyCardList ran");
  console.log("companies in CCL=", companies);
  return (
    <div className="CompanyCardList">
      {companies.map(c => <CompanyCard key={c.handle} companyData={c} />)}
    </div>
  );
}

export default CompanyCardList;