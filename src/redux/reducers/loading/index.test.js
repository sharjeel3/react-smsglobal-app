import { loadingReducer } from './index';
import { UPDATE_LOADING } from '../../../constants/actionTypes';

describe('REDUCER - APP', () => {
  const action = {
    type: UPDATE_LOADING,
    payload: {
      content: 'SEND_IT',
      isLoading: true
    }
  };

  it('should update loading state', () => {
    expect(loadingReducer({}, action)).toEqual({
      SEND_IT: true
    });
  });

  const action2 = {
    type: UPDATE_LOADING,
    payload: {
      content: 'THAT_SEND',
      isLoading: false
    }
  };

  it('should update loading state and keep previous', () => {
    expect(loadingReducer({ SEND_IT: true }, action2)).toEqual({
      SEND_IT: true,
      THAT_SEND: false
    });
  });
});
