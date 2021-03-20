import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LiNavLink from '../LiNavLink';
import Nav from 'react-bootstrap/Nav';
import './style.css';

class Header extends Component {
  render() {
    return (
    <header>
      <Nav variant="tabs" defaultActiveKey="/home">
      <nav className="navbar navbar-expand-md navbar-dark text-secondary fixed-top bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Company Gym</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <LiNavLink activeClassName='active' to="/">Home</LiNavLink>
              <LiNavLink activeClassName='active' to="/about">About</LiNavLink>
              <LiNavLink activeClassName='active' to="/rh">HumanResources</LiNavLink>
              <LiNavLink activeClassName='active' to="/management">Management</LiNavLink>  

              <LiNavLink activeClassName='active' to="/help">Help</LiNavLink>  
              <LiNavLink activeClassName='active' to="/contact">Contact</LiNavLink>
              <LiNavLink activeClassName='active' to="/NotFound">Error</LiNavLink>
              <LiNavLink activeClassName='active' to="/Agenda">Calendary</LiNavLink>  
              <LiNavLink activeClassName='active' to="/Signup">SignUp</LiNavLink>           
            </ul>
          </div>
        </div>
      </nav>
      </Nav>
    </header>
    )
  }
}

export default Header;

/*
              <LiNavLink activeClassName='active' to="/management">Sales</LiNavLink> 
              <LiNavLink activeClassName='active' to="/management">Finance</LiNavLink> 
              <LiNavLink activeClassName='active' to="/management">Marketing</LiNavLink>
              <LiNavLink activeClassName='active' to="/management">Services</LiNavLink> 
              <LiNavLink activeClassName='active' to="/management">Projects</LiNavLink> 
              <LiNavLink activeClassName='active' to="/management">Legal area</LiNavLink> 
              */