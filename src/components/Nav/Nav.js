import React from "react";
import NavRoot, { Logo, Menu } from "./NavElements";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <NavRoot>
      <Logo />
      <Menu>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search Movies</NavLink>
          <NavLink to="/nominations">Nominations</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </Menu>
    </NavRoot>
  );
};

export default Nav;
