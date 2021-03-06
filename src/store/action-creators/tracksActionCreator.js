import { fetch } from '../../apis/index';
import { TracksActionTypes } from '../../utils/constants/actionTypes';

export const fetchTracks = (artist) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TracksActionTypes.FETCH_TRACKS_STARTED });

      const tracksFetchURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&format=json`;
      const response = await fetch(tracksFetchURL);
      const tracksResult = response.data.toptracks.track;

      dispatch({
        type: TracksActionTypes.FETCH_TRACKS_COMPLETED,
        payload: tracksResult,
      });
    } catch (error) {
      console.log('FETCH_TRACKS_ERROR:', error.message);
      dispatch({
        type: TracksActionTypes.FETCH_TRACKS_ERROR,
        payload: error.message,
      });
    }
  };
};
