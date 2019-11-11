import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ReduxApp from './redux';

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

serviceWorker.unregister();
