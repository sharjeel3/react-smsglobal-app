import React from 'react';
import { StyledButton } from './styles';
import PropTypes from 'prop-types';

export const Button = props => {
  const { children, onClick, fullWidth, light, large, className } = props;

  const handleClick = event => {
    // Local handler may not be needed but kept it here for completeness
    onClick(event);
  };

  const buttonProps = {
    onClick: handleClick,
    fullWidth,
    light,
    large,
    ...(className && { className })
  };

  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

Button.defaultProps = {
  onClick: Function.prototype
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
  light: PropTypes.bool
};
