import React from 'react';
import logoSvg from '../../logo.svg';
import { StyledLogo } from './styles';

export const Logo = () => {
  return <StyledLogo src={logoSvg} alt="Address book app" />;
};
