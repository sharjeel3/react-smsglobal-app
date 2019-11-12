import { LOAD_API_CONFIG } from '../../../constants/actionTypes';
import {
  API_DISPLAY_NAME_FIELD,
  API_KEY_FIELD,
  API_SECRET_FIELD
} from '../../../constants/formFields';
import { LocalStorage } from '../../../lib/LocalStorage';

const getHasValidSettings = ({ isConfigReady, apiKey, apiSecret, apiDisplayName }) => {
  const isValid = stuff => stuff.length > 0;
  return isConfigReady && isValid(apiKey) && isValid(apiSecret) && isValid(apiDisplayName);
};

export const getApiData = () => {
  const apiKey = LocalStorage.get(API_KEY_FIELD) || '';
  const apiSecret = LocalStorage.get(API_SECRET_FIELD) || '';
  const apiDisplayName = LocalStorage.get(API_DISPLAY_NAME_FIELD) || '';

  return { apiKey, apiSecret, apiDisplayName };
}

export const loadApiConfig = () => {
  const { apiKey, apiSecret, apiDisplayName } = getApiData();
  const isConfigReady = true;
  const hasValidSettings = getHasValidSettings({
    isConfigReady,
    apiKey,
    apiSecret,
    apiDisplayName
  });

  return {
    type: LOAD_API_CONFIG,
    payload: {
      [API_KEY_FIELD]: apiKey,
      [API_SECRET_FIELD]: apiSecret,
      [API_DISPLAY_NAME_FIELD]: apiDisplayName,
      isConfigReady,
      hasValidSettings
    }
  };
};
