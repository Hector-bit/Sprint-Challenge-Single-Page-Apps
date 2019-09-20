import React from "react";
import { Link } from 'react-router-dom';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className="navbar">
        <div className="navlink">
          <Link to="/">Home</Link>
        </div>
        <div className="navlink">
          <Link to="/Characters">Characters</Link>
        </div>
        <div className="navlink">
          <Link to="/Search">Search</Link>
        </div>
    </nav>
    </header>
  );
}
