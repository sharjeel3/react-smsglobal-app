import { UPDATE_FORM_FIELD } from '../../../constants/actionTypes';

const initialState = {};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
