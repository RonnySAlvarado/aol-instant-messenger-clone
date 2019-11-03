// NPM packages
import React from "react";
import styled from "styled-components";

// React Components
import TopSection from "./TopSection";
import TopSection2 from "./TopSection2";

function App() {
  return (
    <AppContainer>
      <TopSection />
      <TopSection2 />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0 auto;
  border: 2px solid blue;
  width: 500px;
  height: 500px;
`;
