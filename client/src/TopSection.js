import React from "react";
import styled from "styled-components";

const TopSection = () => {
  return (
    <TopSectionContainer>
      <img src="/aol-logo-running-man.png" alt="aol-logo" />
      <ButtonContainer>
        <button>_</button>
        <button>⧠</button>
        <button>X</button>
      </ButtonContainer>
    </TopSectionContainer>
  );
};

export default TopSection;

const TopSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5%;
  background: blue;
  align-items: center;
  padding: 5px 5px 5px 0;
  img {
    width: 30px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 80%
  padding: 0;
  background-color: blue;
  button {
      margin-right: 2px;
      border-radius: 3px;
      border: 1.15px solid white;
      background: blue;
      color: white;
      &:last-child {
          background: red;
      }
  }
`;
