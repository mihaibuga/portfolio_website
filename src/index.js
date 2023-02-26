import React, { StrictMode } from 'react';
import { render } from 'react-dom';

const App = () => {
  return <>
    <p>The application has been cleaned up of the files I'll never use</p>
  </>
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
