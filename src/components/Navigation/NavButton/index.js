import React from 'react';
import PropTypes from 'prop-types';
import { StyledChevronIcon, NavButtonRoot } from './styles';

export const NavButton = ({ onClick }) => {
  return (
    <NavButtonRoot onClick={onClick} light fullWidth large>
      Select a page
      <StyledChevronIcon />
    </NavButtonRoot>
  );
};

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
