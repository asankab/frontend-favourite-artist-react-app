import { configureStore } from '@reduxjs/toolkit';

import albumReducer from './reducers/albums-reducer';
import trackReducer from './reducers/tracks-reducer';

const rootReducer = {
  albums: albumReducer,
  tracks: trackReducer, 
};

const store = configureStore({ reducer: rootReducer });

// console.log(store.getState());

export default store;
