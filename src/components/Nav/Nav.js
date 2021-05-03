import React from "react";
import {
  NavRoot,
  Title,
  StyledHamburger,
  HamburgerRow,
  Indicator,
} from "./Nav.elements";

const Nav = ({ savedMovies, toggleModal }) => {
  return (
    <NavRoot>
      <Title>The Shoppies</Title>
      <StyledHamburger onClick={toggleModal}>
        <Indicator>{savedMovies.length}</Indicator>
        <HamburgerRow />
        <HamburgerRow />
        <HamburgerRow />
      </StyledHamburger>
    </NavRoot>
  );
};

export default Nav;
