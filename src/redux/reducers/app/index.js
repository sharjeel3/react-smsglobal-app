import { LOAD_API_CONFIG } from '../../../constants/actionTypes';

const initialState = {
  api: {
    isConfigReady: undefined,
    hasValidSettings: undefined
  }
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_API_CONFIG:
      return {
        ...state,
        api: { ...action.payload }
      };
    default:
      return state;
  }
};
