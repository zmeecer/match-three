import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Tile from './tile.js';
import Utils from './utils.js';
const colorCount = 5;

class Board extends Component {
  constructor(props) {
    super(props);
    const { size } = this.props;
    this.state = {
      selected: null,
      tiles: this.initializeTiles(size),
    }
  }

  checkBoard() {
    const findedRanges = Utils.findRanges(this.state.tiles, this.props.size);
    return Utils.deleteRanges(this.state.tiles, findedRanges)
  }

  initializeTiles(size) {
    let tiles = Array(size * size);
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        tiles[x*size+y] = {
          id: x*size+y,
          left: x,
          top: y,
          type: Utils.getRandom(colorCount),
        }
      }
    }
    return tiles;
  }

  swapTiles(source, dest) {
    Utils.swapPosition(source, dest);
    let filteredItems = this.checkBoard();
    console.log("filtered: " + filteredItems.map(i => `${i.id}/${i.left}-${i.top}`))
    this.setState({
      tiles: filteredItems,
      selected: null,
    });
  }

  click(id) {
    if (this.state.selected) {
      const sourceTile = Utils.getItemById(this.state.tiles, this.state.selected);
      const destTile = Utils.getItemById(this.state.tiles, id);

      if (Utils.areNeighbors(sourceTile, destTile)) {
        this.swapTiles(sourceTile, destTile);
      }
      this.setState({ selected: null });
    } else {
      this.setState({ selected: id });
    }
  }

  render() {
    return (
      <View
        style={{
          alignSelf: 'flex-start',
          width: this.props.cellSize * this.props.size,
          height: this.props.cellSize * this.props.size,
          backgroundColor: '#ddFCFF',
        }}
      >
        {this.state.tiles.map((tile, index) =>
          <Tile
            key={index}
            type={tile.type}
            label={tile.id}
            left={tile.left}
            top={tile.top}
            cellSize={this.props.cellSize}
            selected={tile.id === this.state.selected}
            click={this.click.bind(this, tile.id)}
          />
        )}
      </View>
    );
  }
}

export default Board;
