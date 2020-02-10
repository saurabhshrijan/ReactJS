import {createStore,applyMiddleware} from 'redux';
import thunk from 'thunk';
import './rootReducers';
const initialState={}
const store=createStore(initialState,rootReducer,applyMiddleware(thunk));
export default store;