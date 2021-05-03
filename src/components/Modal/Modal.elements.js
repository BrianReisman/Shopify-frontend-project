import styled from "styled-components";

export const ModalRoot = styled.div`
  background-color: red;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  border: 1px solid black;
  border-radius: 8px;
  z-index: 2;
  width: 60vw;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const Close = styled.div`
  height: 26px;
  width: 26px;
  font-size: 26px;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
