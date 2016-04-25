import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default (intitalStore = {}) => {
  return createStore(
    reducers,
    intitalStore,
    applyMiddleware(logger(), thunk)
  );
};
