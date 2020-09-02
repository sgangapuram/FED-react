import { createStore } from 'redux';
import reducer1 from '../reducers/reducer1';

const store = createStore(reducer1);

console.log(store);
console.log(store.getState());

export default store;
