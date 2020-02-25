import { createStore, combineReducers } from 'redux';
import { linksApp } from './linksApp';


const rootReducer = combineReducers({ linksApp });

const store = createStore(rootReducer);

export default store;

// store.subscribe(() => {
//   console.log(store.getState());
// });
