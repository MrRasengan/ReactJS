import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';

const TextDisplayForm = () => {
  // Состояние для хранения введенного текста
  const [inputText, setInputText] = useState('');
  // Состояние для хранения отображаемого текста
  const [displayText, setDisplayText] = useState('');

  // Обработчик изменения текста в поле ввода
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  // Обработчик нажатия кнопки
  const handleClick = () => {
    setDisplayText(inputText);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '16px' }}>
      {/* Поле ввода */}
      <TextField
        label="Введите текст"
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={handleChange}
        style={{ marginBottom: '16px' }}
      />

      {/* Кнопка */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ marginBottom: '16px' }}
      >
        Отобразить текст
      </Button>

      {/* Карточка с отображаемым текстом */}
      {displayText && (
        <Card
          variant="outlined"
          style={{
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100px'
          }}
        >
          <Typography variant="h5" component="div">
            {displayText}
          </Typography>
        </Card>
      )}
    </div>
  );
};

export default TextDisplayForm;
