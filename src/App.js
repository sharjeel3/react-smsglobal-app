import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { globleStyles } from './ui-library/global';
import { Layout } from './components/Layout';

const GlobalStyles = createGlobalStyle`
  ${globleStyles}
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>test</Layout>
    </>
  );
};
