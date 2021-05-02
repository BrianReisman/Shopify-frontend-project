import styled from "styled-components";

const GlobalStyles = styled.div`
  box-sizing: border-box;
  * {
    margin: 0;
    padding: 0;
  }
  font-size: 62.5%;
`;

export const ViewHeader = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 10px;
`;

export const ViewRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    border: 1px soli d gold;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
`;

export const Message = styled(Text)`
  color: ${(props) => (props.red ? "red" : "black")};
`;

export const H1 = styled.h1`
  font-size: 6.2rem;
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const BackgroundVid = styled.video`
  height: 100%;
  width: 100%;
  float: left;
  top: 0;
  padding: none;
  position: fixed;
  z-index: -1;
  /* backgound-color: #FBF6EC; */
`;

export const HomeRoot = styled(ViewRoot)`
  justify-content: space-between;
  height: 80vh;
`;

export default GlobalStyles;
