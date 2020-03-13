import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { linksApp } from './linksApp';
import { todoApp } from './todoApp';
import { weatherApp } from './weatherApp';
import { login } from './login';


const rootReducer = combineReducers({
  linksApp,
  todoApp,
  weatherApp,
  login,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

store.subscribe(() => {
  console.log(store.getState());
});
