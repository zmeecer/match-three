import * as types from '../actions/types';

const initialState = {
  tiles: 0,
  seelected: null,
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.SWAP_TILES:
      return {
        ...state,
        tiles: action.tiles
      };
    case types.DELETE_LINES:
      return {
        ...state,
        tiles: actions.tiles
      };
    default:
      return state;
  }
}
