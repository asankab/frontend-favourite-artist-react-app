import { fetch } from './../../apis/index';

export const fetchAlbums = (albumName) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_ALBUMS_STARTED' });

      const albumsFetchURL = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName.toLowerCase()}&format=json`;
      const response = await fetch(albumsFetchURL);
      const albumsResult = response.data.results.albummatches.album;

      dispatch({
        type: 'FETCH_ALBUMS_COMPLETED',
        payload: albumsResult,
      });
    } catch (error) {
      console.log('FETCH_ALBUMS_ERROR:', error.message);
      dispatch({
        type: 'FETCH_ALBUMS_ERROR',
        payload: error.message,
      });
    }
  };
};

export const markAsFavouriteAlbums = (id) => {
  console.log('markAsFavourite');
  return async (dispatch) => {
    try {
      dispatch({
        type: 'MARK_AS_FAVOURITE_ALBUM',
        payload: id,
      });
    } catch (error) {
      console.log('MARK_AS_FAVOURITE_ALBUM_ERROR:', error.message);
      dispatch({
        type: 'MARK_AS_FAVOURITE_ALBUM_ERROR',
        payload: error.message,
      });
    }
  };
};

export const unmarkFromFavouriteAlbums = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'UNMARK_FROM_FAVOURITE_ALBUM',
        payload: id,
      });
    } catch (error) {
      console.log('UNMARK_FROM_FAVOURITE_ALBUM_ERROR:', error.message);
      dispatch({
        type: 'UNMARK_FROM_FAVOURITE_ALBUM_ERROR',
        payload: error.message,
      });
    }
  };
};
