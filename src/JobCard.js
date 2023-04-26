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

function JobCard({ jobData }) {
  return (
    <div className="JobCard">
    <h4>{jobData.title}</h4>
    <p>{jobData.companyName}</p>
    <p>{jobData.salary}</p>
    <p>{jobData.equity}</p>
  </div>
  );
}

export default JobCard;