import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('React App', () => {
  it('renders without crashing', () => {
    const mockStore = configureStore();
    const initialState = { app: { api: {} }, form: {}, loading: {}, message: {}, notify: {} };
    const store = mockStore(initialState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
