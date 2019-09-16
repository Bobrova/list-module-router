import { createStore } from 'redux';
import reducer from '../reducers';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

const update = () => {
  localStorage.setItem('list-module-3d', JSON.stringify(store.getState().list));
};

store.subscribe(update);
