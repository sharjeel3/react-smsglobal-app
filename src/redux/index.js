import React from 'react';
import { App } from '../app';
import { Provider } from 'react-redux';
import { store } from './store';

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxApp;
