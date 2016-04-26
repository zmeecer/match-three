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

  click(e, index) {
    // debugger;
    console.table(`clicked id = ${index}`);
    if (this.state.selected) {
      console.log(`${this.state.selected} swap with ${index}`);
      this.setState({ selected: null });
    } else {
      this.setState({ selected: index });
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
            id={tile.id}
            key={index}
            position={{
              left: this.props.cellSize * tile.position.left,
              top: this.props.cellSize * tile.position.top,
            }}
            cellSize={this.props.cellSize}
            click={() => this.click.bind(this)}
          />
        )}
      </View>
    );
  }
}

export default Board;
