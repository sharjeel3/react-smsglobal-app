import { takeLatest } from 'redux-saga/effects';

export function* appSaga() {
  yield takeLatest('TEST', () => {});
}
