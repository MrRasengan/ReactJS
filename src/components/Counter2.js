import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';

const Counter2 = () => {
  // Используем хук useState для управления состоянием счётчика
  const [count, setCount] = useState(0);

  // Функция для увеличения счётчика
  const increment = () => {
    setCount(count + 1);
  };

  // Функция для уменьшения счётчика
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          {count}
        </Typography>
        <Box mt={2} display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="primary" onClick={increment}>
            Увеличить
          </Button>
          <Button variant="contained" color="secondary" onClick={decrement}>
            Уменьшить
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Counter2;