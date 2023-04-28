import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import userContext from "./userContext";

/** Navigation:
* Visual element with links to companies search, jobs search, and homepage
*
*  NavLinks
*       to: Jobly, Companies, Jobs
*/

function Navigation({logout}) {
  console.log("navigation ran");

  const { username } = useContext(userContext);
  console.log("username in navigation=", username);

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
      <NavLink to="/" className="Navigation-logout" onClick={logout}>
        Log out {username}
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