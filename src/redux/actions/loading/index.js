import { UPDATE_LOADING } from '../../../constants/actionTypes';

export const updateLoading = (content, isLoading) => ({
  type: UPDATE_LOADING,
  payload: {
    content,
    isLoading
  }
});
