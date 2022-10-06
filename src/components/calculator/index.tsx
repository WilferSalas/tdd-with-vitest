// @packages
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { evaluate } from 'mathjs';

const symbols = {
  division: '/',
  multiplication: '*',
  subtraction: '-',
  addition: '+',
};

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const handleOnClick = (value: number | string) => setInputValue(inputValue + value);

  const handleOnSubmit = () => setInputValue(evaluate(inputValue));

  return (
    <Container maxWidth="md">
      <TextField
        fullWidth
        sx={{ my: 2 }}
        value={inputValue}
        onChange={() => {}}
        inputProps={{
          'data-testid': 'input-field',
        }}
      />
      <Grid container spacing={2}>
        <Grid container item xs={9} spacing={1}>
          <Grid item xs={4}>
            <Button
              disabled
              fullWidth
              sx={{ p: 3 }}
              variant="outlined"
            >
              C
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              disabled
              fullWidth
              sx={{ p: 3 }}
              variant="outlined"
            >
              %
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              disabled
              fullWidth
              sx={{ p: 3 }}
              variant="outlined"
            >
              DEL
            </Button>
          </Grid>
          {numbers.map((number) => (
            <Grid item xs={number === 0 ? 12 : 4} key={number}>
              <Button
                fullWidth
                onClick={() => handleOnClick(number)}
                sx={{ p: 3 }}
                variant="outlined"
              >
                {number}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={3} spacing={1}>
          {Object.values(symbols).map((symbol) => (
            <Grid key={symbol} item xs={12}>
              <Button
                fullWidth
                sx={{ p: 3 }}
                variant="outlined"
                onClick={() => handleOnClick(symbol)}
              >
                {symbol}
              </Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={handleOnSubmit}
              sx={{ p: 3 }}
              variant="outlined"
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
