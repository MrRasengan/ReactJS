import React from 'react';
import { Card, Typography } from '@mui/material';

const Content = ({ theme }) => {
  const backgroundColor = theme === 'dark' ? '#333' : '#fff';
  const color = theme === 'dark' ? '#fff' : '#000';

  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor,
        color,
        padding: '16px',
        minHeight: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h5">
        {theme === 'dark' ? 'Темная тема' : 'Светлая тема'}
      </Typography>
    </Card>
  );
};

export default Content;
