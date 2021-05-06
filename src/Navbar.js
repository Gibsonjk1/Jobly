import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({currUser, token, checkAuth}) {
    if (checkAuth(token)){
        return(    
        <div>
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
                <NavLink to={`/profile/${currUser}`}>Profile</NavLink>
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
    <div>
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