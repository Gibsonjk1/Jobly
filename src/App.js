import React, { useState, useEffect, useRef } from 'react';
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
import AppContext from "./Context"



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [token, setToken] = useState(['']);
  const [currUser, setCurrUser] = useState('');
  const [search, setSearch] = useState("")
  const [userInfo, setUserInfo] = useState(localStorage.getItem("username"))

  const currentUser = useRef("");
  const currentToken = useRef("")
  const filteredComp = useRef("")
  let history = useHistory();

  useEffect(() => {
    async function getInfo() {
      let companies = await JoblyApi.getAllCompanies();
      let jobs = await JoblyApi.getAllJobs();
      JoblyApi.token = localStorage.getItem('token')
      setCompanies(companies)
      setJobs(jobs);
      setToken(localStorage.getItem('token'));
      setCurrUser(localStorage.getItem('username'));
      setIsLoading(false);
    }
    getInfo();
  }, []);

useEffect(()=>{
  async function getFiltered(){
  let filteredCompanies = await JoblyApi.getFilteredCompanies(search)
  let jobs = await JoblyApi.getAllJobs(search)
  setJobs(jobs);
  filteredComp.current = filteredCompanies.companies;
  };
  getFiltered();
},[search])

useEffect(()=>{
  async function getUser(){
    const username = localStorage.getItem("username")
    JoblyApi.token = localStorage.getItem("token")
    const profileData = await JoblyApi.getUser(username)
   setUserInfo(profileData)
    }
    getUser()
},[currUser])


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  function user(formData, token){
    currentUser.current = formData.username;
    console.log(currentUser.current)
    currentToken.current = token.token;
    localStorage.setItem("token", currentToken.current)
    localStorage.setItem("username", currentUser.current)
    JoblyApi.token = token.token;
    setToken(token.token);
    setCurrUser(currentUser.current);
    history.push("/");
  }

  function checkAuth(token){
    if(token === localStorage.getItem('token') && token !== null){
      return true
    }else{
      return false
    }
  }

  function logout(){
    localStorage.clear();
    setToken("Not a Token");
    
    return <Redirect to="/" />
  }

  function searchBar({search}){
    setSearch(search)
  }
  
  return (
   <AppContext.Provider value={{ token, setToken, currUser, setCurrUser, checkAuth, user }}>
   
    <Navbar />
    
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/companies">
              <Companies filtered={filteredComp.current} searchBar={searchBar}/>
          </Route>
          <Route path="/companies/:handle" >
              <Company />
          </Route>
          <Route exact path="/jobs">
              <Jobs jobs={jobs} searchBar={searchBar}/>
          </Route>
          <Route exact path="/signup">
              <Signup />
          </Route>
          <Route exact path="/profile">
              <Profile userInfo={userInfo}/>
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route exact path="/logout">
              <Logout logout={logout}/>
          </Route>
          <Redirect to="/"/>
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
