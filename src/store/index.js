import { createStore, combineReducers } from 'redux';
import links from './links';

const store = createStore(combineReducers({
  links,
}));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
