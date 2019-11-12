import { appReducer } from './index';
import { LOAD_API_CONFIG } from '../../../constants/actionTypes';

describe('REDUCER - APP', () => {
  const action = {
    type: LOAD_API_CONFIG,
    payload: {
      apiKey: 'test',
      apiSecret: 'testttest',
      name: 'name',
      isConfigReady: true,
      hasValidSettings: true
    }
  };

  it('should update api config', () => {
    expect(appReducer({}, action)).toEqual({
      api: { ...action.payload }
    });
  });
});
