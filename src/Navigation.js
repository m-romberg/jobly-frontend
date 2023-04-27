import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation:
* Visual element with links to companies search, jobs search, and homepage
*
*  NavLinks
*       to: Jobly, Companies, Jobs
*/

function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink to="/" end>
        Jobly
      </NavLink>
      <NavLink to="/jobs">
        Jobs
      </NavLink>
      <NavLink to="/companies">
        Companies
      </NavLink>
    </nav>
  );
}

export default Navigation;