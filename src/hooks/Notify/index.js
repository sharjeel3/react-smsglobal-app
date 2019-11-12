import { useDispatch, useSelector } from 'react-redux';
import { updateNotifyStatus } from '../../redux/actions/notify';
import { getNotifyState } from '../../redux/selectors';

export const useNotifyHook = () => {
  const dispatch = useDispatch();

  const { timerId, isActive } = useSelector(getNotifyState);

  const getResetNotify = () => ({
    isActive: false,
    message: '',
    timerId: null,
    isError: false
  });

  const clearAfterWait = () => {
    return setTimeout(() => {
      dispatch(updateNotifyStatus({ ...getResetNotify() }));
    }, 2500);
  };

  const notifyUser = (message, isError) => {
    if (isActive) {
      // if there is a previously active message, just clear that timer
      clearTimeout(timerId);
    }
    const newTimerId = clearAfterWait();
    dispatch(
      updateNotifyStatus({
        isActive: true,
        message,
        isError,
        timerId: newTimerId
      })
    );
  };
  return { notifyUser };
};
