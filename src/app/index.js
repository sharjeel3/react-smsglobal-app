import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { globleStyles } from '../ui-library/global';
import { Router } from './Router';

const GlobalStyles = createGlobalStyle`
  ${globleStyles}
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};
