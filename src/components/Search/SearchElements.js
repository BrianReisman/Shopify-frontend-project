import styled from "styled-components";

export const Form = styled.form`
  /* background-color: red; */
  *{
  margin: 0 auto;
  padding: 0;
  }
  display: flex;
  flex-direction: column;
  /* min-width: 600px; */
`;

export const Input = styled.input`
  font-size: 16px;
  outline: none;
  border: 1px solid #bbb;
  margin: 10px;
  border-radius: 8px;
  padding: 4px;
`;

export const Button = styled.button`
  color: teal;
  font-size: 1.6rem;
  margin: 0px auto;
  padding: 10px 30px;
  outline: none;
  border: none;
  border-radius: 8px;
  /* padding: 10px 20px; */
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  border: 3px solid maroon;
  margin: 50px;
`;

export const Img = styled.img``;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
`;

export const MovieCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;
