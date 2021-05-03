import styled from "styled-components";
import img from "./assets/film_backdrop.jpg";

const Root = styled.div`
  //root
  /* box-sizing: border-box;
  border: 2px dotted red;
  max-width: 1200px;
  margin: 0 auto;
  * {
    margin: 0;
    padding: 0;
  }
  font-size: 62.5%;*/
`;

export const BackgroundImg = styled.div`
  /* border: 2px dotted red; */

  z-index: -1;
  background-image: linear-gradient(
      131.73deg,
      rgba(45, 145, 10, 0.5) 14.46%,
      rgba(114, 190, 248, 0.5) 87.62%
    ),
    url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const Title = styled.h2`
  font-size: 60px;
  padding: 30px;
  letter-spacing: 0.1em;
  color: #ffffff;
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

export default Root;
