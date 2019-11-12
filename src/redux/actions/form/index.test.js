import { UPDATE_FORM_FIELD, UPDATE_PARTIAL_FORM_FIELD } from '../../../constants/actionTypes';

import { updateFormField, updatePartialFormField } from './index';

describe('ACTION CREATOR - FORM', () => {
  it('should return UPDATE_FORM_FIELD', () => {
    const payload = {
      from: {
        field: 'from',
        message: '',
        touch: true,
        value: 'value'
      }
    };
    expect(updateFormField(payload)).toEqual({
      type: UPDATE_FORM_FIELD,
      payload
    });
  });

  it('should return UPDATE_PARTIAL_FORM_FIELD', () => {
    const payload = {
      field: 'api',
      data: {
        message: 'failed message',
        value: '',
        error: true
      }
    };
    expect(updatePartialFormField(payload)).toEqual({
      type: UPDATE_PARTIAL_FORM_FIELD,
      payload
    });
  });
});
