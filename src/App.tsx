import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <CenterDiv>
      <DatePicker />
    </CenterDiv>
  );
}

export default App;
