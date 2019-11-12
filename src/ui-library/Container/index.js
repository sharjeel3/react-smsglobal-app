import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles';

export const Container = ({ children, className }) => {
  const props = {
    ...(className && { className })
  };
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string
};
