import React from 'react';
import PropTypes from 'prop-types';
import { NotifyRoot } from './styles';
import { Container } from '../../ui-library/Container';

export const Notify = props => {
  const { children, isActive } = props;

  return (
    <NotifyRoot isActive={isActive}>
      <Container>{children}</Container>
    </NotifyRoot>
  );
};

Notify.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isActive: PropTypes.bool
};
