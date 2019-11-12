import { UPDATE_LOADING } from '../../../constants/actionTypes';
import { updateLoading } from './index';

describe('ACTION CREATOR - LOADING', () => {
  it('should return UPDATE_LOADING', () => {
    expect(updateLoading('SEND', true)).toEqual({
      type: UPDATE_LOADING,
      payload: {
        content: 'SEND',
        isLoading: true
      }
    });
  });
});
