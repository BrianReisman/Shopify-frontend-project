import styled from "styled-components";

export const NavRoot = styled.nav`
  /* border: 2px solid red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
`;

export const Title = styled.h2`
  font-size: 60px;
  letter-spacing: 0.15em;
  color: #ffffff;
`;

export const StyledHamburger = styled.div`
  /* position: absolute; */
  /* top: 0; */
  /* right: 0; */
  height: 48px;
  width: 60px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const HamburgerRow = styled.div`
  width: 50px;
  height: 10px;
  border-radius: 7px;
  background-color: #c4c4c4;
`;

export const Indicator = styled.div`
  background-color: red;
  height: 29px;
  width: 29px;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  position: fixed;
  top: 55px;
  right: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

`;
