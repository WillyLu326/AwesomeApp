import { createStore, combineReducers } from 'redux';
import { placeReducer } from './reducers/placesReducer';

const rootReducer = combineReducers({placeReducer});

const store = createStore(rootReducer);

export default store;