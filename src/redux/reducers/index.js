import { combineReducers } from 'redux';
import { appReducer } from './app';
import { formReducer } from './form';
import { messageReducer } from './message';

export const combinedReducer = combineReducers({
  app: appReducer,
  form: formReducer,
  message: messageReducer
});
