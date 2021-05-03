import styled from "styled-components";

export const ResultsRoot = styled.div`
  /* border: 1px solid red; */

  margin: 5px;
  background-color: #25273c;
  padding: 20px;
  color: red;
  flex: 1 1 66%;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-between;
`;

export const MovieCard = styled.div`
  /* border: 1px solid yellow; */
  
  display: flex;
  width: 350px;
  margin: 15px;
  border-radius: 8px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const MovieCardTitle = styled.p`
  font-size: 36px;
`;
export const MovieCardYear = styled.p`
  font-size: 24px;
`;
export const MovieCardImg = styled.img`
  height: auto;
  width: 90px;
`;
export const MovieCardNominateBtn = styled.button``;
