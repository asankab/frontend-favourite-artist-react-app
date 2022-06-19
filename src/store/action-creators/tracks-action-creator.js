import { fetch } from '../../apis/index';

export const fetchTracks = (artist) => {
  console.log('Fetching tracks' );
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_TRACKS_STARTED' });

      const tracksFetchURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&format=json`;
      const response = await fetch(tracksFetchURL);
      const tracksResult = response.data.toptracks.track;

      dispatch({
        type: 'FETCH_TRACKS_COMPLETED',
        payload: tracksResult,
      });
    } catch (error) {
      console.log('FETCH_TRACKS_ERROR:', error.message);
      dispatch({
        type: 'FETCH_TRACKS_ERROR',
        payload: error.message,
      });
    }
  };
};
