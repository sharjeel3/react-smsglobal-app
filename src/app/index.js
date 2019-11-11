import React  from 'react';
import { createGlobalStyle } from 'styled-components';
import { globleStyles } from '../ui-library/global';
import { Router } from './Router';
import { useAppHook } from '../hooks/App';

const GlobalStyles = createGlobalStyle`
  ${globleStyles}
`;

export const App = () => {
  useAppHook();

  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};
