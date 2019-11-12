import React from 'react';
import { StyledCard } from './styles';
import PropTypes from 'prop-types';

export const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
