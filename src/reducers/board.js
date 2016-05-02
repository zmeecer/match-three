import * as types from '../actions/types';

const initialState = {
  tiles: [],
  selected: null,
};

export default function board(state = initialState, action = {}) {
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
