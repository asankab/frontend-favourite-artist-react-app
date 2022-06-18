//import { ADD, SUB, MUL, DIV } from './constants.js'

const dafaultState = {
  albums: [],
  isLoading: false,
  counter: 0,
};

const albumReducer = (state = dafaultState, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_STARTED':
      return { ...state, isLoading: true };
    case 'FETCH_ALBUMS_COMPLETED':
      return { ...state, albums: action.payload, isLoading: false };
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export default albumReducer;
