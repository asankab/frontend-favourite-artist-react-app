import React from 'react';

const AlbumContext = React.createContext({
  albums: [
    {
      name: 'Asaka',
    },
    {
      name: 'Amal',
    },
  ],
  addToFavoriteAlbum: () => {},
  removeFromFavoriteAlbum: () => {},
});

export default AlbumContext;
