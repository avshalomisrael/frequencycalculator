import React, { useState } from 'react';
import { Box, Paper, CardContent, Button, TextField, } from '@mui/material';
import { Item, } from './CustomComponents';

const FrequencyCalculator: React.FC = () => {
  const [frequency, setFrequency] = useState<number>(440);
  const [cents, setCents] = useState<number>(-10);
  const [adjustedFrequency, setAdjustedFrequency] = useState<number | null>(null);

  const calculateFrequency = () => {
    const adjusted = frequency * Math.pow(2, cents / 1200);
    setAdjustedFrequency(parseFloat(adjusted.toFixed(2)));
  };

  return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, }}>
          <Paper elevation={5} sx={{ p: 5}}>
            <Item elevation={0}>
              <h2>Frequency Adjustment Calculator</h2>
              <CardContent >
                <TextField
                  type="number"
                  label="Frequency (Hz)"
                  variant='outlined'
                  required
                  value={frequency}
                  onChange={(e) => setFrequency(parseFloat(e.target.value))}
                  />
              </CardContent>
              <CardContent>
                <TextField
                  type="number"
                  label="Cents Adjustment"
                  variant='outlined'
                  required
                  value={cents}
                  onChange={(e) => setCents(parseFloat(e.target.value))}
                />
              </CardContent>
            </Item>
            <Item elevation={0} >
              <Button variant="outlined" onClick={calculateFrequency}>
                Calculate Adjusted Frequency
              </Button>
            </Item>
            <Item elevation={0} sx={{ height:'2vh'}}>
              {adjustedFrequency !== null && (
                <div style={{ marginTop: '20px' }}>
                  <h3>Adjusted Frequency: {adjustedFrequency} Hz</h3>
                </div>
              )}
            </Item>
          </Paper>
      </Box>
  );
};

export default FrequencyCalculator;
