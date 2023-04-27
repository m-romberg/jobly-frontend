import { Link } from "react-router-dom";

/** Homepage:
*     homepage visual element
*
*
* RoutesList --> Homepage
*/

function Homepage() {
  console.log("homepage ran");
  const username = false;

  const loggedInHomepageContent =
    <div className="loggedInHomepageContent">
      <p>Welcome back, {username}!</p>
    </div>;

  const loggedOutHomepageContent =
    <div className="loggedOutHomepageContent">
      <Link to="/login">
        <button className="Homepage-login-btn">Log in</button>
      </Link>
      <Link to="/signup">
        <button className="Homepage-signup-btn">Sign up</button>
      </Link>
    </div>;

  return (
    <div className="Homepage">
      <h1 className="Homepage-title">Jobly</h1>
      <h3 className="Homepage-description">
        All the jobs in one, convenient place.
      </h3>
      {username ? loggedInHomepageContent : loggedOutHomepageContent}
    </div>

  );
}

export default Homepage;
