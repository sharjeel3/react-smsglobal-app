import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './index';

describe('Redux App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReduxApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
