import React, { useState } from 'react';

import emotionStyled from '@emotion/styled';

const Wrapper = emotionStyled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100svh',
  width: '100vw',
});

const Button = emotionStyled('button')(({ theme }) => ({
  background: theme.colors.light.button,
  color: theme.colors.light.buttonText,
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '0.5rem',

  '&:hover': {
    background: theme.colors.light.buttonHover,
  },
}));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
    </Wrapper>
  );
}

export default App;
