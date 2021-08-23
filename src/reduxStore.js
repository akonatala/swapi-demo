import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './redux/rootReducer.js';

export default function reduxStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
  );

  return store;
}