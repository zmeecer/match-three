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
    Utils.findRanges(this.state.tiles, this.props.size);
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
          deletable: false,
        }
      }
    }
    return tiles;
  }

  getTileById(id) {
    return this.state.tiles.find((item) => (
      item.id === id
    ))
  }

  swapTiles(source, dest) {
    Utils.swapPosition(source, dest);
    this.setState({ selected: null });
    this.checkBoard();
  }

  click(id) {
    if (this.state.selected) {
      const sourceTile = this.getTileById(this.state.selected);
      const destTile = this.getTileById(id);

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
          flex: 10,
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
            position={{
              left: this.props.cellSize * tile.left,
              top: this.props.cellSize * tile.top,
            }}
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
