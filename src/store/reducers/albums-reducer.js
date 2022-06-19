const dafaultState = {
  albums: [],
  isLoading: false,
  favouriteAlbums: [],
  counter: 0,
  error: {},
};

const albumReducer = (state = dafaultState, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_STARTED':
      return { ...state, isLoading: true };
    case 'FETCH_ALBUMS_COMPLETED':
      return { ...state, albums: action.payload, isLoading: false };
    case 'FETCH_ALBUMS_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'MARK_AS_FAVOURITE_ALBUM':
      return {
        ...state,
        favouriteAlbums: state.favouriteAlbums.concat(action.payload),
      };
    case 'MARK_AS_FAVOURITE_ALBUM_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'UNMARK_FROM_FAVOURITE_ALBUM':
      const id = action.payload;
      let favouriteAlbums = [...state.favouriteAlbums];
      const index = favouriteAlbums.indexOf(id);
      if (index > -1) {
        favouriteAlbums.splice(index, 1);
      }
      return { ...state, favouriteAlbums: favouriteAlbums };
    case 'UNMARK_FROM_FAVOURITE_ALBUM_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default albumReducer;
