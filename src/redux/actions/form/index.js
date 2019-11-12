import { UPDATE_FORM_FIELD, UPDATE_PARTIAL_FORM_FIELD } from '../../../constants/actionTypes';

export const updateFormField = payload => ({
  type: UPDATE_FORM_FIELD,
  payload
});

export const updatePartialFormField = payload => ({
  type: UPDATE_PARTIAL_FORM_FIELD,
  payload
});
