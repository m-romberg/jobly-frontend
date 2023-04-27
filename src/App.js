import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import JoblyApi from './api';
import { useState, useEffect } from 'react';

/**
 *
 * App:
 * Controlls Jobly website
 * Handles login and sign up validation
 *
 *
 *  App ==> { Navigation, RoutesList }
 */
function App() {
  console.log("Inside App.");

  const initialState = { username: "", firstName: "", lastName: "", isAdmin: "", jobs: "" };

  const [token, setToken] = useState("");
  const [currUserData, setCurrUserData] = useState(initialState);

  console.log("App state=", "token=", token, "currUserData", currUserData);

  useEffect(function fetchUserOnTokenChange() {
    console.log("inside fetchUserOnTokenChange");
    async function getUser() {
      console.log("inside getUser");
      try {
        console.log("currUserData", currUserData );
        const userResult = await JoblyApi.getUser(currUserData.username, token);
        console.log("userResult", userResult);
        setCurrUserData(userResult);
      } catch (error) {
        console.log("error in getUser");
      }
    }
    getUser();
  }, [token ]);

  async function login(loginData) {
    console.log("inside login");
    const { username, password } = loginData;
    try {
      const token = await JoblyApi.loginUser({ username, password });
      setToken(token);
      JoblyApi.token = token;
      setCurrUserData(curr => {
        curr['username'] = username;
        return [...curr];
      });
    } catch (error) {
      console.log("error in login", error);
      //err needs to go to form to display message
    }
  }

  async function signup(signupData) {
    console.log("inside signup");
    const { username, password, firstName, lastName, email } = signupData;
    try {
      const token = await JoblyApi.registerUser({ username, password, firstName, lastName, email });
      setToken(token);
      JoblyApi.token = token;
      setCurrUserData(curr => {
        curr['username'] = username;
        return {...curr};
      });
    } catch (error) {
      console.log("error in signup", error);
      //err needs to go to form to display message
    }
  }

  function logout() {
    console.log("inside logout");
    setToken("");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList login={login} signup={signup} logout={logout} />
      </BrowserRouter>
    </div>
  );
}

export default App;
