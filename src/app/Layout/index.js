import React from 'react';
import { Header } from '../../ui-library/Header';
import PropTypes from 'prop-types';
import { Wrapper, Aside, Content } from './styles';
import { Navigation } from '../../components/Navigation';
import { Notify } from '../../components/Notify';
import { useSelector } from 'react-redux';
import { getNotifyState } from '../../redux/selectors';

export const Layout = ({ children }) => {
  const { isActive, message, isError } = useSelector(getNotifyState);

  return (
    <>
      <Header />
      <Notify isError={isError} isActive={isActive}>
        {message}
      </Notify>
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
