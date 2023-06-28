import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import userContext from "./userContext";
import "./Homepage.css";

/** Homepage:
*     homepage visual element
*
*
* RoutesList --> Homepage
*/

function Homepage() {
  console.log("homepage ran");
  const { username } = useContext(userContext);
  console.log("username in navigation=", username);

  const loggedInHomepageContent =
    <Container className="Homepage-loggedInHomepageContent">
      <Row><Col>
        <p>Welcome back, {username}!</p>
      </Col></Row>
    </Container>;
  //TODO: updsate classnames w component names first
  const loggedOutHomepageContent =
    <Container className="Homepage-loggedOutHomepageContent">
      <Row>
        <Col>
          <Link to="/login">
            <button className="Homepage-login-btn">Log in</button>
          </Link>
        </Col>
        <Col>
          <Link to="/signup">
            <button className="Homepage-signup-btn">Sign up</button>
          </Link>
        </Col>
      </Row>
    </Container>;

  return (
    <Container className="Homepage">
      <Row>
        <Col>
          <h1 className="Homepage-title">Jobly</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="Homepage-description">
            All the jobs in one, convenient place.
          </h3>
        </Col>
      </Row>
      {username ? loggedInHomepageContent : loggedOutHomepageContent}
    </Container>

  );
}

export default Homepage;
