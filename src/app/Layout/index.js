import React from 'react';
import { Header } from '../../ui-library/Header';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { Navigation } from '../../components/Navigation';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="aside">
          <Navigation />
        </div>
        <div className="content">{children}</div>
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
