import { UPDATE_FORM_FIELD, UPDATE_PARTIAL_FORM_FIELD } from '../../../constants/actionTypes';

const initialState = {};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_PARTIAL_FORM_FIELD:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          ...action.payload.data
        }
      };
    default:
      return state;
  }
};
