import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadApiConfig } from '../../redux/actions/app';

export const useAppHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch is added to dependency array as we defined it in component scope
    dispatch(loadApiConfig());
  }, [dispatch]);

  return {};
};
