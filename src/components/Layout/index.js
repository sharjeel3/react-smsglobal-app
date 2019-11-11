import React from 'react';
import { Header } from '../../ui-library/Header';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
