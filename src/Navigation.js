import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation:
* Visual element with links to companies search, jobs search, and homepage
*
*  NavLinks
*       to: Jobly, Companies, Jobs
*/

function Navigation() {
  console.log("navigation ran");

  const username = false;
  //TODO: need profile and logout navlink
  const loggedInNav =
    <nav className="Navigation-loggedIn">
      <NavLink to="/" className="Navigation-jobly" end>
        Jobly
      </NavLink>
      <NavLink to="/jobs" className="Navigation-jobs">
        Jobs
      </NavLink>
      <NavLink to="/companies" className="Navigation-companies">
        Companies
      </NavLink>
    </nav>;

  const loggedOutNav =
    <nav className="Navigation-loggedOut">
      <NavLink to="/" className="Navigation-jobly" end>
        Jobly
      </NavLink>
      <NavLink to="/login" className="Navigation-login">
        Login
      </NavLink>
      <NavLink to="/signup" className="Navigation-signup">
        Signup
      </NavLink>
    </nav>;

  return username ? loggedInNav : loggedOutNav;
}

export default Navigation;