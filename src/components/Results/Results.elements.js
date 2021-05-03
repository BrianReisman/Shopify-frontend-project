import styled from "styled-components";

export const ResultsRoot = styled.div`
  /* border: 1px solid red; */

  max-width: 900px;
  text-align: center;
  border-radius: 7px;
  background-color: #25273c;
`;

export const MovieCard = styled.div`
  /* border: 2px solid yellow; */

  border-radius: 7px 7px 0 0; //better way to get this via container?
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #25273c;
  border-bottom: 2px solid #ffffff20;
  padding: 5px 20px;
  margin: 10px 0;
`;

export const Info = styled.div`
  /* border: 1px solid darkolivegreen; */

  color: ${(props) => (props.nominated ? "#ffffff40" : "#ffffff")};

  font-family: Verdana;
  font-size: 16px;
  /* font-style: normal; */
  /* font-weight: 200; */
  /* line-height: 24px; */
  text-align: left;
  /* word-wrap: ; //!handle long tasts */

  @media (max-width: 600px) {
    font-size: 16px;
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
  /* width: 50%; */
`;

export const ShowMoreBtn = styled.button``;
export const Showing = styled.p``;
