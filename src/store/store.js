import {createStore} from 'redux';
import counterReducer from '../reducers/reducer1';


export default createStore(counterReducer/*comma sep list*/);