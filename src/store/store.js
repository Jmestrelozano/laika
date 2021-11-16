import { combineReducers, createStore } from 'redux';
import { experienciesReducer } from '../reducers/experienciesReducer';
import { todoAppReducer } from '../reducers/todoAppReducer';

const reducers = combineReducers({
  experiencies: experienciesReducer,
  todoAppReducer: todoAppReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
