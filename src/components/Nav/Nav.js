import React from "react";
import NavRoot, { Logo, Menu } from "./NavElements";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <NavRoot>
      <Logo />
      <Menu>
        <ul>
          <NavLink to="/">asdf</NavLink>
          <NavLink to="/">asdf</NavLink>
          <NavLink to="/">asdf</NavLink>
        </ul>
      </Menu>
      test from Nav.js
    </NavRoot>
  );
};

export default Nav;
