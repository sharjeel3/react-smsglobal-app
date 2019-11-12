import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../../redux/actions/message';
import { getSentMessagesList } from '../../redux/selectors';

export const useGetMessageHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  const messages = useSelector(getSentMessagesList);

  return { messages };
};
