import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../../redux/actions/message';
import { getIsLoading, getSentMessagesList } from '../../redux/selectors';
import { GET_MESSAGE } from '../../constants/contentTypes';

export const useGetMessageHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  const messages = useSelector(getSentMessagesList);
  const isLoading = useSelector(getIsLoading(GET_MESSAGE))

  return { messages, isLoading };
};
