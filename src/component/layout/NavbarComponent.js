import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faBullhorn,
  faClock,
  faCog,
  faEnvelope,
  faSearch,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import '@Assets/styles/nav.css';
import LogoImage from '@Assets/images/logo_sppm_blanco.svg';

const NavbarComponent = () => (
  <Navbar bg="primary-green" expand="lg">
    <Container fluid className="mx-3">
      <Link to="/" className="py-0 navbar-brand">
        <img src={LogoImage} alt="logo" height="30px" />
      </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="mt-3 mt-lg-0">
        <div className="d-none d-md-block ms-auto">
          <div>
            <input type="text" placeholder="Buscar ..." className="input-nav" />
            <button type="button" className="button-nav">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <Nav
          className="navbar-links ms-auto my-2 my-lg-0"
          style={{ maxHeight: '250px' }}
          navbarScroll
        >
          <Link className="nav-link" to="tramites">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link className="nav-link" to="tramites">
            <FontAwesomeIcon icon={faClock} />
          </Link>
          <Link className="nav-link" to="tramites">
            <FontAwesomeIcon icon={faBullhorn} />
          </Link>
          <Link className="nav-link" to="tramites">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <Link className="nav-link" to="tramites">
            <FontAwesomeIcon icon={faPlusCircle} />
          </Link>
          <Link className="nav-link" to="tramites">
            <FontAwesomeIcon icon={faCog} />
          </Link>
          <NavDropdown className="navbar-toggle-btn" title="Andres Esteva" />
          <img
            rounded="true"
            height={35}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
          />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
