import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

export default (intitalStore = {}) => {
  const createStoreWithMiddlewares = compose(
    applyMiddleware(logger())
  )(createStore);

  return createStoreWithMiddlewares(reducers, intitalStore);
};
