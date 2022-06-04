import { createStore } from 'redux';
import phonebookReducer from './reducer';

const store = createStore(phonebookReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;


