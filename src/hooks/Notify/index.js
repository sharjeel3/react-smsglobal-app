import { useDispatch, useSelector } from 'react-redux';
import { updateNotifyStatus } from '../../redux/actions/notify';
import { getNotifyState } from '../../redux/selectors';

export const useNotifyHook = () => {
  const dispatch = useDispatch();

  const { timerId, isActive } = useSelector(getNotifyState);

  const getResetNotify = () => ({
    isActive: false,
    message: '',
    timerId: null
  });

  const clearAfterWait = () => {
    return setTimeout(() => {
      dispatch(updateNotifyStatus({ ...getResetNotify() }))
    }, 2000);
  };

  const notifyUser = message => {
    if (isActive) {
      // if there is a previously active message, just clear that timer
      clearTimeout(timerId);
    }
    const newTimerId = clearAfterWait();
    dispatch(
      updateNotifyStatus({
        isActive: true,
        message,
        timerId: newTimerId
      })
    );
  };
  return { notifyUser };
};
