import styled from "styled-components";

const NavRoot = styled.nav`
  display: flex;
  /* background-color: palegoldenrod; */
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

export const Logo = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
`;

export const Menu = styled.div`
  display: flex;
  /* flex-direction:  */
  a {
    text-decoration: none;
    color: black;
    margin: 5px;
    padding: 5px 25px;
    border-radius: 8px;
    background-color: orange;
    font-size: 1.4rem;
    :hover {
      background-color: black;
      color: orange;
    }
  }
`;

export default NavRoot;
