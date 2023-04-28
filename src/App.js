import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import JoblyApi from './api';
import { useState, useEffect } from 'react';
import userContext from "./userContext";
import { decodeToken } from "react-jwt";

/**
 *
 * App:
 *  Controls Jobly website
 *  Handles login and sign up validation
 *
 * state:
 *    token - null or user's JWT
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
  const [token, setToken] = useState(null);
  const [currUserData, setCurrUserData] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState(null);

  console.log("App state=", "token=", token, "currUserData", currUserData);
  console.log("error msgs in app", errorMessages);

  /** Gets user data on initial render and token change */
  useEffect(function fetchUserOnTokenChange() {
    console.log("inside fetchUserOnTokenChange");
    async function getUser() {
      console.log("inside getUser");
      if (token !== null) {
        const username = decodeToken(token).username;
        console.log("jwt decode username=", username);
        try {
          const userResult = await JoblyApi.getUser(username, token);
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

  //TODO: update error message handling to empty them out somewhere
  async function login(loginData) {
    console.log("inside login");
    const { username, password } = loginData;
    try {
      const token = await JoblyApi.loginUser({ username, password });
      setToken(token);
      JoblyApi.token = token;
    } catch (error) {
      console.log("error in login", error);
      return error;
      // setErrorMessages(error);
    }
  }

  /** Signs up a user or sets error messages */
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
    } catch (error) {
      console.log("error in signup", error);
      setErrorMessages(error);
    }
  }

  /** Logs out a user and sets token to empty string */
  function logout() {
    console.log("inside logout");
    setToken(null);
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
