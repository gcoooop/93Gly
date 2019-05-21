import React from "react";
import { Link } from "react-router-dom";

const NavBarRight = ({ currentUser, logout }) => {

  let navRightLis;
  if (currentUser) {
    navRightLis = <li className="nav-logout" onClick={logout}>Log out</li>
  } else {
    navRightLis = [
      <li className="nav-login"><Link key={1} to="/login">Log in</Link></li>,
      <li className="nav-signup"><Link key={2} to="/signup">Sign up</Link></li>
    ];
  };

  return (
    <ul className="nav-right">
      {navRightLis}
    </ul>
  );
};

export default NavBarRight;