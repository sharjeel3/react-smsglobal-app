import { UPDATE_NOTIFY } from '../../../constants/actionTypes';

const initialState = {
  isActive: false,
  message: '',
  timerId: null,
  isError: false
};

export const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTIFY:
      return {
        ...state,
        isActive: action.payload.isActive,
        message: action.payload.message,
        timerId: action.payload.timerId,
        isError: action.payload.isError
      };
    default:
      return state;
  }
};
