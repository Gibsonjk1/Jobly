import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import './App.css';
import Companies from './routes/Companies';
import Home from './routes/Home';
import Company from './routes/IndividualCompany';
import Jobs from './routes/Jobs';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Profile from './routes/Profile'
import Navbar from './Navbar'
import JoblyApi from './api'
import Logout from "./routes/Logout"



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [token, setToken] = useState(['']);
  const [currUser, setCurrUser] = useState('');

  let currentUser = useRef("");
  const currentToken = useRef("")
  let history = useHistory();

  useLayoutEffect(() => {
    async function getInfo() {
      let companies = await JoblyApi.getAllCompanies();
      let jobs = await JoblyApi.getAllJobs();
      console.log(currentToken.current)
      setCompanies(companies)
      setJobs(jobs);
      setToken(localStorage.getItem('token'));
      setCurrUser(localStorage.getItem('user'));
      setIsLoading(false);
    }
    getInfo();
  }, []);

  useEffect(()=>{ 
    function setUser(){
    JoblyApi.token = token
    history.push("/")
  }
  setUser()
}, [token])
 
  


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  function user(formData, token){
    currentUser.current = formData.username;
    currentToken.current = token.token;
    setCurrUser(currentUser.current)
    setToken(currentToken.current)
    console.log("I made it to user function")
    console.log(token)
    localStorage.setItem("token", currentToken.current)
    localStorage.setItem("user", currentUser.current)

  }

  function checkAuth(token){
    if(token === localStorage.getItem('token') && token !== null){
      return true
    }else{
      return false
    }
  }

  function logout(){
    localStorage.clear()
    setToken(null)
    return <Redirect to="/" />
  }
  
  return (
    <>
    <Navbar token={token} checkAuth={checkAuth}/>
    
      <Switch>
          <Route exact path="/">
              <Home currUser={currUser} token={token} checkAuth={checkAuth}/>
          </Route>
          <Route exact path="/companies">
              <Companies companies={companies} token={token} checkAuth={checkAuth}/>
          </Route>
          <Route path="/companies/:handle" >
              <Company token={token}/>
          </Route>
          <Route exact path="/jobs">
              <Jobs jobs={jobs} token={token}/>
          </Route>
          <Route exact path="/signup">
              <Signup user={user}/>
          </Route>
          <Route exact path="/profile">
              <Profile token={token} currUser={currUser} checkAuth={checkAuth}/>
          </Route>
          <Route exact path="/login">
              <Login user={user}/>
          </Route>
          <Route exact path="/logout">
              <Logout logout={logout}/>
          </Route>
          <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
