import { useSelector } from 'react-redux';
import { getApiConfig, getFieldValue } from '../../redux/selectors';
import {
  API_KEY_FIELD,
  API_SECRET_FIELD,
  API_DISPLAY_NAME_FIELD
} from '../../constants/formFields';
import { LocalStorage } from '../../lib/LocalStorage';

export const useSettingHook = () => {
  const { isConfigReady, apiKey, apiSecret, apiDisplayName, hasValidSettings } = useSelector(
    getApiConfig
  );
  const hasSettings = isConfigReady && hasValidSettings;

  const apiKeyValue = useSelector(getFieldValue(API_KEY_FIELD));
  const apiSecretValue = useSelector(getFieldValue(API_SECRET_FIELD));
  const apiDisplayNameValue = useSelector(getFieldValue(API_DISPLAY_NAME_FIELD));

  const handleSaveClick = () => {
    return (
      LocalStorage.save(API_KEY_FIELD, apiKeyValue) &&
      LocalStorage.save(API_SECRET_FIELD, apiSecretValue) &&
      LocalStorage.save(API_DISPLAY_NAME_FIELD, apiDisplayNameValue)
    );
  };

  return { handleSaveClick, hasSettings, apiKey, apiSecret, apiDisplayName };
};
