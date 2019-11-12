import { takeEvery, call, put } from '@redux-saga/core/effects';
import {
  SEND_MESSAGE_REQUESTED,
  SEND_MESSAGE_SUCCEEDED,
  SEND_MESSAGE_FAILED
} from '../../../constants/actionTypes';
import { Api } from '../../../lib/Api';

function* sendMessageWorker(action) {
  try {
    const [error, response] = yield call(Api.sendMessage, action.payload);
    if (error) {
      // Most likely Api error
      return yield put({ type: SEND_MESSAGE_FAILED, error: error.response.data, response: null });
    }
    yield put({ type: SEND_MESSAGE_SUCCEEDED, error: null, response });
  } catch (e) {
    // Something broke down
    yield put({ type: SEND_MESSAGE_FAILED, error: e.toString(), response: null });
  }
}

export const messageSagas = [takeEvery(SEND_MESSAGE_REQUESTED, sendMessageWorker)];
