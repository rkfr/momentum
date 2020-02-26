import { createStore, combineReducers } from 'redux';
import { linksApp } from './linksApp';
import { todoApp } from './todoApp';


const rootReducer = combineReducers({ linksApp, todoApp });

const store = createStore(rootReducer);

export default store;

store.subscribe(() => {
  console.log(store.getState());
});
