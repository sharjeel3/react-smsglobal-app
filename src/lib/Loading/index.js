import { updateLoading } from '../../redux/actions/loading';

export const ReduxLoading = (() => {
  const loadingMiddleware = store => next => action => {
    const { type } = action;
    if (!type) {
      // Let Redux handle this
      return next(action);
    }

    const isLoading = type.indexOf('_REQUESTED') !== -1;
    const isFinished = type.indexOf('_SUCCEEDED') !== -1 || type.indexOf('_FAILED') !== -1;

    if (isLoading || isFinished) {
      const content = type.replace(/_REQUESTED|_SUCCEEDED|_FAILED/, '');
      store.dispatch(updateLoading(content, isLoading));
    }

    next(action);
  };

  return { loadingMiddleware };
})();
