import styled from "styled-components";

export const ModalRoot = styled.div`
  background-color: #fff1aa;
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
  padding: 20px;
`;
export const Close = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  font-size: 26px;
  cursor: pointer;
  :hover {
    color: #bbb;
  }
`;
export const ModalHead = styled.div`
  /* border: 1px solid yellow; */

  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
