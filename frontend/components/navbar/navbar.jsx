import React from "react";
import { Link } from "react-router-dom";
import NavBarRightContainer from "./navbar_right_container";

const NavBar = (ownProps) => {
  const splashStyling = ( ownProps.location.pathname === "/" ? "splash-nav" : "");
  return (
    <nav className={splashStyling}>
      <ul className="nav-left">
        <li><Link to="/" id="logo">93Gly</Link></li>
        <li><Link to="/">Discover</Link></li>
      </ul>
      <NavBarRightContainer /> 
    </nav>
  );
};

export default NavBar;