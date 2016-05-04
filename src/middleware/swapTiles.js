import * as types from '../actions/types';

function getItemById(items, id) {
  return items.find((item) => (
    item.id === id
  ))
}

function swapPosition(source, dest) {
  const { left, top } = source;
  source.left = dest.left;
  source.top = dest.top;
  dest.left = left;
  dest.top = top;
}

function swapItems(items, source, dest) {
  const newItems = items.slice(0);
  const newSource = getItemById(newItems, source.id);
  const newDest = getItemById(newItems, dest.id);
  swapPosition(newSource, newDest);
  return newItems;
}

function areNeighbors(items, source, dest) {
  return (
    (Math.abs(source.left-dest.left) == 1
      && source.top === dest.top)
    ||
    (Math.abs(source.top-dest.top) == 1
    && source.left === dest.left)
  );
}

export default function swapTilesMiddleware() {
  return ({ getState }) => next => action => {
    if (action.type === types.SWAP_TILES) {
      const { tiles } = getState().board;
      const source = getItemById(tiles, action.sourceId);
      const dest = getItemById(tiles, action.destId);


      if (areNeighbors(tiles, source, dest)) {
        next({
          ...action,
          tiles: swapItems(tiles, source, dest);
        })
      } else {
        next(action);
      }
    } else {
      next(action);
    }
  };
}
