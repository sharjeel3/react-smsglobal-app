import { combineReducers } from 'redux';
import { appReducer } from './app';
import { formReducer } from './form';
import { messageReducer } from './message';
import { loadingReducer } from './loading';
import { notifyReducer } from './notify';

export const combinedReducer = combineReducers({
  app: appReducer,
  form: formReducer,
  message: messageReducer,
  loading: loadingReducer,
  notify: notifyReducer
});
