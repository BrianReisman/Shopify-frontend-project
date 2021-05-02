import styled from "styled-components";

const NavRoot = styled.nav`
  display: flex;
  background-color: #004d3e;
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
  a {
    text-decoration: none;
    color: #004d3e;
    margin: 5px;
    padding: 5px 25px;
    border-radius: 8px;
    background-color: #fbf6ec;
    font-size: 1.4rem;
    :hover {
      background-color: black;
      color: orange;
    }
  }
`;

export default NavRoot;
