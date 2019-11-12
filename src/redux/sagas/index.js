import { all } from 'redux-saga/effects';
import { messageSagas } from './message';

export function* appSaga() {
  yield all([...messageSagas]);
}
