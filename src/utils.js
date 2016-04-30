export default class Utils {
  static findRanges(tiles, size) {
    function findRangesByKey(tiles, size, key) {
      for (let lineIndex = 0; lineIndex < size; lineIndex++) {
        let line = tiles.filter(
          (item) => item[key] == lineIndex
        );

        for(let i = 0; i < line.length;) {
          if(i < line.length - 1) {
            if (line[i].type !== line[i+1].type) {
              i++;
            } else {
              let rangeCount = 2;
              for(let rangeIndex = i+1; rangeIndex < line.length - 1; rangeIndex++) {
                if (line[rangeIndex].type !== line[rangeIndex+1].type) {
                  break;
                } else {
                  rangeCount++;
                }
              }
              if (rangeCount > 2) {
                console.log(`delete ${key}: pos ${lineIndex} ${i} range ${rangeCount}`);
              }
              i += rangeCount;
            }
          } else {
            i++;
          }
        }
      }
    }

    findRangesByKey(tiles, size, "top")
    findRangesByKey(tiles, size, "left")
  }

  static getRandom(size) {
     return Math.round(Math.random() * 10 % size);
  }

  static areNeighbors(source, dest) {
    return (
      (Math.abs(source.left-dest.left) == 1
        && source.top === dest.top)
      ||
      (Math.abs(source.top-dest.top) == 1
      && source.left === dest.left)
    );
  }

  static swapPosition(source, dest) {
    const { left, top } = source;
    source.left = dest.left;
    source.top = dest.top;
    dest.left = left;
    dest.top = top;
  }
}
