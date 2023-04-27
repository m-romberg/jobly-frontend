import "./JobCard.css"

/**
* JobCard: simple visual element of job
*
* props:
*   - jobData - {title, companyName, salary, equity}
*
* state:
*   - none
* JobCardList ==> {JobCard,...}
*/
//TODO: destructure jobdata!

function JobCard({ jobData, companyName }) {
  return (
    <div className="JobCard">
    <h4>{jobData.title}</h4>
    {jobData.companyName
          ? <p>{jobData.companyName}</p>
          : <p>{companyName}</p>
    }
    <p>Salary: {jobData.salary}</p>
    <p>Equity: {jobData.equity}</p>
  </div>
  );
}

export default JobCard;