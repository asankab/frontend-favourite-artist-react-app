import { configureStore } from '@reduxjs/toolkit';
import albumsReducer from './reducers/albums-reducer';

const store = configureStore({ reducer: albumsReducer });

export default store;
