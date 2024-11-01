import React from 'react';
import FrequencyCalculator from './FrequencyCalculator';
import FrequencyCalculatorInfo from './FrequencyCalculatorInfo';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
        <FrequencyCalculatorInfo/>
        <FrequencyCalculator />
    </Container>
  );
};

export default App;
