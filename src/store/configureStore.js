import { createStore, combineReducers } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    placesData: placesReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
