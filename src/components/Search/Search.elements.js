import styled from "styled-components";

export const SearchRoot = styled.div`
border: 2px solid red;

    max-width: 800px;
  margin: 0 auto;
  padding: 20px;

`

export const Form = styled.form`
  /* background-color: red; */
  * {
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Display = styled.div`
  /* border: 3px solid maroon; */

  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: 50px;
  max-width: 60vw;
  padding: 15px;
  box-shadow: -5px 8px 6px rgba(0, 0, 0, 0.25);
  /* max-height: 50vh; */
`;

export const Img = styled.img`
display: block;
  /* max-height: ; */
  /* width: auto; */
  /* border: 1px solid black; */
  /* padding: 10px; */
  border-radius: 8px;
  /* width: 50%; */

  border: 1px solid #ddd;
  padding: 5px;
`;

export const CardInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  /* border: 1px solid black; */
`;

export const MovieCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;

export const MovieTitle = styled.h3`
  font-size: 30px;
  text-align: center;
`;
