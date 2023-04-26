import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation:
* Visual element with links to companies search, jobs search, and homepage
*
*  NavLinks
*       to: Jobly, Companies, Jobs
*/
//TODO: research end! it wont always do what we want
function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink to="/" end>
        Jobly
      </NavLink>
      <NavLink to="/jobs" end>
        Jobs
      </NavLink>
      <NavLink to="/companies" end>
        Companies
      </NavLink>
    </nav>
  );
}

export default Navigation;