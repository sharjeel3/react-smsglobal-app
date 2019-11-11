import { appReducer } from './app';
import { combineReducers } from 'redux';

export const combinedReducer = combineReducers({ app: appReducer });
