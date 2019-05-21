import React from "react";
import { Link } from "react-router-dom";

const NavBarRight = ({ currentUser, logout }) => {

  let navRightLis;
  if (currentUser) {
    navRightLis = <li onClick={logout}>Log out</li>
  } else {
    navRightLis = [
      <Link key={1} to="/login">Log in</Link>,
      <Link key={2} to="/signup">Sign up</Link>
    ];
  };

  return (
    <ul className="nav-right">
      {navRightLis}
    </ul>
  );
};

export default NavBarRight;