import {
  API_KEY_FIELD,
  API_DISPLAY_NAME_FIELD,
  API_SECRET_FIELD
} from '../../constants/formFields';

export const FormModule = (() => {
  const isEmpty = stuff => stuff === '';

  const getValidationResponse = (field, value) => {
    switch (field) {
      case API_KEY_FIELD:
        return { error: isEmpty(value), message: isEmpty(value) ? 'API key is required' : '' };
      case API_SECRET_FIELD:
        return { error: isEmpty(value), message: isEmpty(value) ? 'API secret is required' : '' };
      case API_DISPLAY_NAME_FIELD:
        return { error: isEmpty(value), message: isEmpty(value) ? 'Display name is required' : '' };
      default:
        return { error: false, message: '' };
    }
  };

  const validate = (field, value) => {
    return getValidationResponse(field, value);
  };
  return { validate };
})();
