import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer, {State as MovieState} from './projects/MovieList/reducers';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({movies: reducer});

export interface RootState extends MovieState {}

export function configureStoreLocal() {
  const middlewares = [thunk];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer),
  );

  return store;
}

const store = configureStore({
  reducer: {movies: reducer},
  middleware: [thunk],
  devTools: true,
});

export default store;
