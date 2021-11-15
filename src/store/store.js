import { combineReducers, createStore } from 'redux';
import { experienciesReducer } from '../reducers/experienciesReducer';

const reducers = combineReducers({
  experiencies: experienciesReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
