import React, { Component } from "react";
import {  Link, animateScroll as scroll } from "react-scroll";
import { Nav, Navbar, Container } from 'react-bootstrap';

export default class Navigations extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >Acceuil</Link>
              <Link activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >Services</Link>
              <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >About</Link>
              <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >Contact</Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

/*
<nav className="nav" id="navbar">
        <div className="nav-content">
         logo
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Acceuil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
*/
