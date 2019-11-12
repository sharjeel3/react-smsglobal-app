import { createStore, applyMiddleware } from 'redux';
import { combinedReducer } from './reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { appSaga } from './sagas';
import { ReduxLoading } from '../lib/Loading';

const sagaMiddleware = createSagaMiddleware();

const storeMiddleware = [sagaMiddleware, ReduxLoading.loadingMiddleware];

if (process.env.NODE_ENV !== 'production') {
  storeMiddleware.push(createLogger());
}

export const store = createStore(combinedReducer, applyMiddleware(...storeMiddleware));

sagaMiddleware.run(appSaga);
