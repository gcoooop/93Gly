import React from "react";
import { Link } from "react-router-dom";
import NavBarRightContainer from "./navbar_right_container";

const NavBar = props => {
  return (
    <nav>
      <ul className="nav-left">
        <li><Link to="/" id="logo">93Gly</Link></li>
        <li><Link to="/">Discover</Link></li>
      </ul>
      <NavBarRightContainer /> 
    </nav>
  );
};

export default NavBar;