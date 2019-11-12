import React from 'react';
import { Header } from '../../ui-library/Header';
import PropTypes from 'prop-types';
import { Wrapper, Aside, Content } from './styles';
import { Navigation } from '../../components/Navigation';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Aside>
          <Navigation />
        </Aside>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
