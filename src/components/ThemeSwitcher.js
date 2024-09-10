import React, { useState } from 'react';
import { Button } from '@mui/material';
import Content from './Content';

const ThemeSwitcher = () => {
  // Состояние для хранения текущей темы
  const [theme, setTheme] = useState('light');

  // Обработчик переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ textAlign: 'center', padding: '16px' }}>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Переключить тему
      </Button>
      <Content theme={theme} />
    </div>
  );
};

export default ThemeSwitcher;
