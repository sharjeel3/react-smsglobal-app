import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { globleStyles } from './ui-library/global';

const GlobalStyles = createGlobalStyle`
  ${globleStyles}
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
    </>
  );
};
