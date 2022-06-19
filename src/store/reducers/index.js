import { combineReducers } from 'redux';

import albumReducer from './reducers/albums-reducer';
import trackReducer from './reducers/tracks-reducer';

const rootReducer = combineReducers({
  albums: albumReducer,
  tracks: trackReducer,
});

export default rootReducer;
