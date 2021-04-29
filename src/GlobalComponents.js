import styled from "styled-components";

const GlobalStyles = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
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

export const Text = styled.p`
  font-size: 1.6rem;
`

export default GlobalStyles;
