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
    this.checkBoard();
    this.setState({ selected: null });
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
          flex: 10,
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
