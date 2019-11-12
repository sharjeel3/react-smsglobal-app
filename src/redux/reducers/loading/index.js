import { UPDATE_LOADING } from '../../../constants/actionTypes';

const initialState = {};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return {
        ...state,
        [action.payload.content]: action.payload.isLoading
      };
    default:
      return state;
  }
};
