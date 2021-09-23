import React from 'react';
import { AppWrapper } from './styles';
import SquareRenderer from './components/SquareRenderer';

const MATRIX_DIMENSION = 50;

function App() {
  return (
    <AppWrapper>
      <SquareRenderer dimensional={MATRIX_DIMENSION} />
    </AppWrapper>
  );
}

export default App;
