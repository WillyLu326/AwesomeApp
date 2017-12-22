import { createStore, combineReducers } from 'redux';
import { placeReducer } from './reducers/placesReducer';

const rootReducer = combineReducers({placeReducer});