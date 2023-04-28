import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import JoblyApi from './api';
import { useState, useEffect } from 'react';
import userContext from "./userContext";

/**
 *
 * App:
 *  Controls Jobly website
 *  Handles login and sign up validation
 *
 * state:
 *    token - sets user's JWT
 *    currUserData - {username,
 *                    firstName,
 *                    lastName,
 *                    email,
 *                    isAdmin (t/f),
 *                    applications ([])
 *                  }
 *     errorMessages - ["Invalid username/password", ...]
 *
 * props: none
 *
 * App ==> { Navigation, RoutesList }
 */
function App() {
  console.log("Inside App.");

  const initialState = {
    username: null,
    firstName: null,
    lastName: null,
    isAdmin: null,
    applications: null
  };
  //TODO: set token to null --update docstring (str or null)
  const [token, setToken] = useState("");
  const [currUserData, setCurrUserData] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState(null);

  console.log("App state=", "token=", token, "currUserData", currUserData);
  console.log("error msgs in app", errorMessages);
  //TODO: grab username from payload of token on line 53 instead
  /** Gets user data on initial render and token change */
  useEffect(function fetchUserOnTokenChange() {
    console.log("inside fetchUserOnTokenChange");
    async function getUser() {
      console.log("inside getUser");
      if (currUserData.username !== null) {
        try {
          console.log("currUserData", currUserData);
          const userResult = await JoblyApi.getUser(currUserData.username, token);
          console.log("userResult", userResult);
          setCurrUserData(userResult);
        } catch (error) {
          console.log("error in getUser");
          setErrorMessages(error);
        }
      }
    }
    getUser();
  }, [token]);

  /** Logs in a user or sets error messages */
  //TODO: 77-80 will change after token change
  //TODO: update error message handling to empty them out somewhere
  async function login(loginData) {
    console.log("inside login");
    const { username, password } = loginData;
    try {
      const token = await JoblyApi.loginUser({ username, password });
      setToken(token);
      JoblyApi.token = token;
      setCurrUserData(curr => {
        curr['username'] = username;
        return { ...curr };
      });
    } catch (error) {
      console.log("error in login", error);
      setErrorMessages(error);
    }
  }

  /** Signs up a user or sets error messages */
  //TODO: dont need 99-101 after token change above
  async function signup(signupData) {
    console.log("inside signup");
    const { username, password, firstName, lastName, email } = signupData;
    try {
      const token =
        await JoblyApi.registerUser(
          { username, password, firstName, lastName, email }
        );
      setToken(token);
      JoblyApi.token = token;
      setCurrUserData(curr => {
        curr['username'] = username;
        return { ...curr };
      });
    } catch (error) {
      console.log("error in signup", error);
      setErrorMessages(error);
    }
  }

  /** Logs out a user and sets token to empty string */
  //TODO: change token reset to null here as well
  function logout() {
    console.log("inside logout");
    setToken("");
    setCurrUserData(initialState);
  }

  return (
    <div className="App">
      <userContext.Provider value={
        {
          username: currUserData.username,
          firstName: currUserData.firstName,
          applications: currUserData.applications
        }
      }>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList
            login={login}
            signup={signup}
            logout={logout}
            errorMessages={errorMessages}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
