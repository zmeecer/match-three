import * as types from './types';

export function initBoard(size) {
  return {
    type: types.INIT_BOARD,
    size,
  };
}

export function swapTiles(source, dest) {
  return {
    type: types.SWAP_TILES,
    source,
    dest,
  };
}

export function checkBoard() {
  return {
    type: types.DELETE_LINES,
  };
}
