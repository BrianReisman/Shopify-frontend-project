import styled from "styled-components";

const GlobalStyles = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 2rem;
`;

export const ViewHeader = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  ::before, ::after{
    content: ''
  }
`

export const ViewRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  *{
    border: 1px solid gold;
  }
  padding: 20px;
`;

export default GlobalStyles;
