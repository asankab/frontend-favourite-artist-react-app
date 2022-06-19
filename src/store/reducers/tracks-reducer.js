const dafaultState = {
  tracks: [],
  isLoading: false,
  error: {},
};

const trackReducer = (state = dafaultState, action) => {
  switch (action.type) {
    case 'FETCH_TRACKS_STARTED':
      return { ...state, isLoading: true };
    case 'FETCH_TRACKS_COMPLETED':
      return { ...state, tracks: action.payload, isLoading: false };
    case 'FETCH_TRACKS_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default trackReducer;
