import { UPDATE_NOTIFY } from '../../../constants/actionTypes';
import { updateNotifyStatus } from './index';

describe('ACTION CREATOR - LOADING', () => {
  it('should return UPDATE_LOADING - SET', () => {
    const payload = { isActive: true, message: 'heyyyy' };
    expect(updateNotifyStatus(payload)).toEqual({
      type: UPDATE_NOTIFY,
      payload
    });
  });

  it('should return UPDATE_LOADING - REMOVE', () => {
    const payload = { isActive: false, message: '' };
    expect(updateNotifyStatus(payload)).toEqual({
      type: UPDATE_NOTIFY,
      payload
    });
  });
});
