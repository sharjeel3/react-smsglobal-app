import {
  GET_MESSAGE_FAILED,
  GET_MESSAGE_REQUESTED,
  GET_MESSAGE_SUCCEEDED
} from '../../../constants/actionTypes';
import { expectSaga } from 'redux-saga-test-plan';
import { getMessageWorker } from './index';

describe('SAGA - MESSAGES', () => {
  const response = { messages: [{ id: 545454545 }] };
  const error = { response: { data: 'Something is wrong' } };

  it('GET_MESSAGE_SUCCEEDED works', () => {
    const api = {
      getMessage: () => [null, response]
    };
    return expectSaga(getMessageWorker, api)
      .put({
        type: GET_MESSAGE_SUCCEEDED,
        error: null,
        response: response
      })
      .dispatch({ type: GET_MESSAGE_REQUESTED, payload: {} })
      .run();
  });

  it('GET_MESSAGE_FAILED works', () => {
    const api = {
      getMessage: () => [error, null]
    };
    return expectSaga(getMessageWorker, api)
      .put({
        type: GET_MESSAGE_FAILED,
        error: 'Something is wrong',
        response: null
      })
      .dispatch({ type: GET_MESSAGE_REQUESTED, payload: {} })
      .run();
  });
});
