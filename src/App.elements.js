import styled from "styled-components";

export const AppRoot = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 50px;


  #overlay {
    position: fixed;
    opacity: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    pointer-events: none;
    /* transition: 200ms ease-in-out; */
  }
  #overlay.active {
    opacity: 1;
    pointer-events: all;
  }

`;
