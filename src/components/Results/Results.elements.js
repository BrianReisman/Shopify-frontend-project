import styled from "styled-components";

export const ResultsRoot = styled.div`
  /* border: 1px solid red; */

  max-width: 900px;
  margin: 5px;
  background-color: #25273c;
  padding: 20px;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCard = styled.div`
  border: 1px solid yellow;

  background-color: #bbb;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 20px;
  padding: 10px;
  box-shadow: 1px, 1px, 1;
  border-radius: 8px;
`;

export const Info = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  * {
    margin: 0;
    padding: 0;
  }
`;
export const MovieCardTitle = styled.p`
  font-size: 36px;
  text-align: center;
`;
export const MovieCardYear = styled.p`
  font-size: 24px;
`;

export const MovieCardNominateBtn = styled.button`
  width: 50%;
`;
