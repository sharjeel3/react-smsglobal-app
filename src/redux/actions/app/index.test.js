import { LOAD_API_CONFIG } from '../../../constants/actionTypes';
import { loadApiConfig } from './index';
import {
  API_DISPLAY_NAME_FIELD,
  API_KEY_FIELD,
  API_SECRET_FIELD
} from '../../../constants/formFields';

describe('ACTION CREATOR - LOADING with values', () => {
  beforeEach(() => {
    localStorage.setItem(API_KEY_FIELD, 'keysss');
    localStorage.setItem(API_SECRET_FIELD, 'secretssss');
    localStorage.setItem(API_DISPLAY_NAME_FIELD, 'namesss');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should return LOAD_API_CONFIG with values', () => {
    expect(loadApiConfig()).toEqual({
      type: LOAD_API_CONFIG,
      payload: {
        [API_KEY_FIELD]: 'keysss',
        [API_SECRET_FIELD]: 'secretssss',
        [API_DISPLAY_NAME_FIELD]: 'namesss',
        isConfigReady: true,
        hasValidSettings: true
      }
    });
  });
});

describe('ACTION CREATOR - LOADING without values', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return LOAD_API_CONFIG with values', () => {
    expect(loadApiConfig()).toEqual({
      type: LOAD_API_CONFIG,
      payload: {
        [API_KEY_FIELD]: '',
        [API_SECRET_FIELD]: '',
        [API_DISPLAY_NAME_FIELD]: '',
        isConfigReady: true,
        hasValidSettings: false
      }
    });
  });
});
