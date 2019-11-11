import { LOAD_API_CONFIG } from '../../../constants/actionTypes';

const initialState = {
  api: {}
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
