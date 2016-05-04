import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';
import Tile from './tile.js';
import Utils from '../utils.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    }
  }

  checkBoard() {
    const findedRanges = Utils.findRanges(this.state.tiles, this.props.size);
    Utils.deleteRanges(this.state.tiles, findedRanges)
  }

  swapTiles(source, dest) {
    Utils.swapPosition(source, dest);
    // this.checkBoard();
  }

  click(id) {
    if (this.state.selected) {
      this.props.onSwap(this.state.selected, id);
      this.setState({ selected: null });
    } else {
      this.setState({ selected: id });
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 0,
          alignSelf: 'flex-start',
          width: this.props.cellSize * this.props.size,
          height: this.props.cellSize * this.props.size,
          backgroundColor: '#ddFCFF',
        }}
      >
        {this.props.tiles.map((tile, index) =>
          <Tile
            key={index}
            tile={tile}
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
