import * as types from './types';

export function initBoard(size) {
  return {
    type: types.INIT_BOARD,
    size,
  };
}

export function swapTiles(sourceId, destId) {
  return {
    type: types.SWAP_TILES,
    sourceId,
    destId,
  };
}

export function checkBoard() {
  return {
    type: types.DELETE_LINES,
  };
}
