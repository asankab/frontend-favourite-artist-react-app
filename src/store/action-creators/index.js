import { fetch } from './../../apis/index';

export const fetchAlbums = (albumName) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_ALBUMS_STARTED' });

    const albumsFetchURL = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName.toLowerCase()}&format=json`;
    const response = await fetch(albumsFetchURL);
    const albumsResult = response.data.results.albummatches.album;

    dispatch({
      type: 'FETCH_ALBUMS_COMPLETED',
      payload: albumsResult,
    });
  };
};
