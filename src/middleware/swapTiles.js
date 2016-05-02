import * as types from '../actions/types';

export default function swapTilesMiddleware() {
  return ({ getState }) => next => action => {
    if (action.type === types.SWAP_TILES) {
      let { source, dest } = action;
    }
    next(action);
  };
}
