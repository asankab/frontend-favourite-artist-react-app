import AlbumContext from './albums-context';
import { useReducer } from 'react';

const defaultAlbumState = {
  // albums: [],
  albums: [
    {
      name: 'Asaka',
    },
    {
      name: 'Amal',
    },
  ],
};

const albumReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedAlbum = state.albums.concat(action.album);
    return {
      albums: updatedAlbum,
    };
  }
  if (action.type === 'REMOVE') {
  }

  return defaultAlbumState;
};

const AlbumProvider = (props) => {
  const [albumState, dispatchAlbumAction] = useReducer(
    albumReducer,
    defaultAlbumState
  );

  const addToFavoriteAlbumHandler = (album) => {
    dispatchAlbumAction({
      type: 'ADD',
      album,
    });
  };

  const removeFromFavoriteAlbumHandler = (id) => {
    dispatchAlbumAction({
      type: 'REMOVE',
      id,
    });
  };

  const AlbumCtx = {
    albums: albumState.albums,
    addToFavoriteAlbum: addToFavoriteAlbumHandler,
    removeFromFavoriteAlbum: removeFromFavoriteAlbumHandler,
  };

  return (
    <AlbumContext.Provider value={AlbumCtx}>
      {props.children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
