import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dropReducer from '../reducers/dropReducer';
import fetchListReducer from '../reducers/fetchListReducer';
import executeFile from '../reducers/executeFile';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      option: dropReducer,
      list: fetchListReducer,
      data: executeFile
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
