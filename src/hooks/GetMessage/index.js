import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../../redux/actions/message';
import { getApiConfig, getIsLoading, getSentMessagesList } from '../../redux/selectors';
import { GET_MESSAGE } from '../../constants/contentTypes';

export const useGetMessageHook = () => {
  const dispatch = useDispatch();

  const { isConfigReady, hasValidSettings } = useSelector(getApiConfig);

  const hasSettings = isConfigReady && hasValidSettings;

  useEffect(() => {
    if (hasSettings) {
      dispatch(getMessage());
    }
  }, [dispatch, hasSettings]);

  const messages = useSelector(getSentMessagesList);
  const isLoading = useSelector(getIsLoading(GET_MESSAGE))

  return { messages, isLoading, hasSettings };
};
