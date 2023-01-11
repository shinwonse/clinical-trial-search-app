import React from 'react';
import styled from 'styled-components';

import MainPage from './pages/main';

function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #cae9ff;
  height: 100vh;
`;

export default App;
