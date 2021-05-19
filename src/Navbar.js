import React, {useContext} from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import AppContext from "./Context"
import {v4 as uuid} from "uuid"

function NavBar() {
    let {token, checkAuth} = useContext(AppContext);
    if (checkAuth(token)){
        return(    
        <div key={uuid()}>
            <Navbar expand="md">
              <NavLink exact to="/" className="navbar-brand">
                Jobly
              </NavLink>
      
              <Nav className="ml-auto">
              <NavItem className="navitem">
                <NavLink to="/jobs">Jobs</NavLink>
              </NavItem>
              <NavItem className="navitem">
                <NavLink to="/companies">Companies</NavLink>
              </NavItem>
              <NavItem className="navitem">
                <NavLink to={`/profile`}>Profile</NavLink>
              </NavItem>
                <NavItem className="navitem">
                  <NavLink to="/logout">Logout</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </div>
          )
    }
  return (
    <div key={uuid()}>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto">
          <NavItem className="navitem">
            <NavLink to="/login">Login</NavLink>
          </NavItem>
          <NavItem className="navitem">
            <NavLink to="/signup">Sign Up</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;