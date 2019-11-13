import { takeEvery, call, put } from '@redux-saga/core/effects';
import {
  SEND_MESSAGE_REQUESTED,
  SEND_MESSAGE_SUCCEEDED,
  SEND_MESSAGE_FAILED,
  GET_MESSAGE_FAILED,
  GET_MESSAGE_REQUESTED,
  GET_MESSAGE_SUCCEEDED
} from '../../../constants/actionTypes';
import { Api } from '../../../lib/Api';

export function* getMessageWorker(api) {
  function* handler(action) {
    try {
      const [error, response] = yield call(api.getMessage, action.payload);
      if (error) {
        // Most likely Api error
        return yield put({ type: GET_MESSAGE_FAILED, error: error.response.data, response: null });
      }
      yield put({ type: GET_MESSAGE_SUCCEEDED, error: null, response });
    } catch (e) {
      // Something broke down
      yield put({ type: GET_MESSAGE_FAILED, error: e.toString(), response: null });
    }
  }
  yield takeEvery(GET_MESSAGE_REQUESTED, handler);
}

export function* sendMessageWorker(api) {
  function* handler(action) {
    try {
      const [error, response] = yield call(api.sendMessage, action.payload);
      if (error) {
        // Most likely Api error
        return yield put({ type: SEND_MESSAGE_FAILED, error: error.response.data, response: null });
      }
      yield put({ type: SEND_MESSAGE_SUCCEEDED, error: null, response: response, isSent: true });
    } catch (e) {
      // Something broke down
      yield put({ type: SEND_MESSAGE_FAILED, error: e.toString(), response: null });
    }
  }
  yield takeEvery(SEND_MESSAGE_REQUESTED, handler);
}

export const messageSagas = [sendMessageWorker(Api), getMessageWorker(Api)];
