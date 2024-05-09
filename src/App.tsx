import React, { useState } from 'react';

import emotionStyled from '@emotion/styled';

const Button = emotionStyled('button')(({ theme }) => ({
  background: theme.colors.button,
  border: 'none',
  color: theme.colors.buttonText,

  '&:hover': {
    background: theme.colors.buttonHover,
  },
}));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
    </>
  );
}

export default App;
