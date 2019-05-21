import React from "react";
import { Link } from "react-router-dom";
import NavBarRightContainer from "./navbar_right_container";

const NavBar = props => {
  return (
    <nav>
      <ul className="nav-left">
        <li>93Gly</li>
        <li><Link to="/">Discover</Link></li>
      </ul>
      <NavBarRightContainer /> 
    </nav>
  );
};

export default NavBar;