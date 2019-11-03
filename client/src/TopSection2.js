import React from "react";
import styled from "styled-components";

const TopSection2 = () => {
  return (
    <TopSection2Container>
      <p>File</p>
      <p>Edit</p>
      <p>Insert</p>
      <p>People</p>
    </TopSection2Container>
  );
};

export default TopSection2;

const TopSection2Container = styled.div`
  background: light-gray;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  p {
    margin-right: 10px;
    text-decoration: underline;
  }
`;
