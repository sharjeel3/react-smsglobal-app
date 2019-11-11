import { combineReducers } from 'redux';
import { appReducer } from './app';
import { formReducer } from './form';

export const combinedReducer = combineReducers({ app: appReducer, form: formReducer });
