import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NotifyRoot } from './styles';
import { Container } from '../../ui-library/Container';

let resizeTimer;

export const Notify = props => {
  const { children, isActive, isError } = props;
  const [scrollTop, setScrollTop] = useState(
    window.pageYOffset || document.documentElement.scrollTop
  );

  const fn = () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setScrollTop(window.pageYOffset || document.documentElement.scrollTop);
    }, 10);
  };

  useEffect(() => {
    document.addEventListener('scroll', fn);
    return () => {
      document.removeEventListener('scroll', fn);
    };
  }, []);

  return (
    <NotifyRoot scrollTop={scrollTop} isError={isError} isActive={isActive}>
      <Container>{children}</Container>
    </NotifyRoot>
  );
};

Notify.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isActive: PropTypes.bool,
  isError: PropTypes.bool
};
