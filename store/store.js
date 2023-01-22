import {combineReducers,  createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'
import reducers from './reducers';
 

const rootReducer = combineReducers({
	reducer: reducers,
})



const store = createStore(rootReducer, applyMiddleware(thunk))





export default store;