import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const FrequencyCalculatorInfo: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Paper elevation={0} sx={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Frequency Adjustment Calculator
        </Typography>
        
        <Paper elevation={0} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="body1">
            <strong>What is the Frequency Adjustment Calculator?</strong><br />
            This tool is designed for musicians, sound engineers, and anyone exploring alternative tunings. 
            It allows you to adjust a base frequency by a specific number of cents (a small pitch measurement),
            letting you align frequencies to tuning systems such as 432 Hz or experiment with microtonal pitches.
          </Typography>
          <br />
          <Typography variant="body1">
            <strong>How to Use the Calculator</strong><br />
            Enter a base frequency (e.g., 440 Hz) and a cents adjustment (positive or negative). Press 
            "Calculate Adjusted Frequency" to get the new frequency based on your specified adjustment.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
};

export default FrequencyCalculatorInfo;
