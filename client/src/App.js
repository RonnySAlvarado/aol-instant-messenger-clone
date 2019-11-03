// NPM packages
import React from "react";
import styled from "styled-components";

// React Components
import TopSection from "./TopSection";

function App() {
  return (
    <AppContainer>
      <TopSection />
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
