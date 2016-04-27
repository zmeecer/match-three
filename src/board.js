import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Tile from './tile.js';

class Board extends Component {
  constructor(props) {
    super(props);
    const { size } = this.props;
    this.state = {
      selected: null,
      tiles: this.initializeTiles(size),
    }
  }

  initializeTiles(size) {
    let tiles = Array(size * size);
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        tiles[x*size+y] = {
          id: x*size+y,
          position: {
            left: x,
            top: y,
          },
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

  isNeighborTiles(source, dest) {
    return (
      (Math.abs(source.position.left-dest.position.left) == 1
        && source.position.top === dest.position.top)
      ||
      (Math.abs(source.position.top-dest.position.top) == 1
      && source.position.left === dest.position.left)
    );
  }

  swapTiles(source, dest) {
    const swapPosition = source.position;
    source.position = dest.position;
    dest.position = swapPosition;
    this.setState({ selected: null })
  }

  click(id) {
    if (this.state.selected) {
      const sourceTile = this.getTileById(this.state.selected);
      const destTile = this.getTileById(id);

      if (this.isNeighborTiles(sourceTile, destTile)) {
        this.swapTiles(sourceTile, destTile);
      } else {
        this.setState({ selected: null });
      }
    } else {
      this.setState({ selected: id });
    }
  }

  render() {
    return (
      <View
        style={{
          width: this.props.cellSize * this.props.size,
          height: this.props.cellSize * this.props.size,
          backgroundColor: '#ddFCFF',
        }}
      >
        {this.state.tiles.map((tile, index) =>
          <Tile
            key={index}
            label={tile.id}
            position={{
              left: this.props.cellSize * tile.position.left,
              top: this.props.cellSize * tile.position.top,
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
