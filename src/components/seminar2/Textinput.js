import { useState } from 'react';

function TextInput() {
  const [value, setValue] = useState('');

  const updateValue = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <input type='text' placeholder='Напиши что нибудь' onChange={updateValue}/>
      <p>{value}</p>
    </div>

  );
}

export default TextInput;