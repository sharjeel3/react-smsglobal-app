import { formReducer } from './index';
import { UPDATE_FORM_FIELD, UPDATE_PARTIAL_FORM_FIELD } from '../../../constants/actionTypes';

describe('REDUCER - FORM', () => {
  it('should update form state', () => {
    const action = {
      type: UPDATE_FORM_FIELD,
      payload: {
        apiKeyField: {
          value: 'testst',
          error: false,
          message: 'hello',
          touch: true
        }
      }
    };
    expect(formReducer({}, action)).toEqual({
      ...action.payload
    });
  });

  it('should update partial form state', () => {
    const previousState = {
      iAmHere: {
        value: 'testst',
        error: false,
        message: 'hello',
        touch: true
      }
    }
    const action = {
      type: UPDATE_PARTIAL_FORM_FIELD,
      payload: {
        field: 'iAmHere',
        data: {
          value: 'i am new'
        }
      }
    };
    expect(formReducer(previousState, action)).toEqual({
      iAmHere: {
        value: 'i am new',
        error: false,
        message: 'hello',
        touch: true
      }
    });
  });
});
