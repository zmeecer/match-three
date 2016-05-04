import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { initBoard } from '../actions/board';

import NavigationBar from 'react-native-navbar';
import Board from '../components/board.js';

const size = 3;
const { width } = require('Dimensions').get('window');
const cellSize = Math.floor(width / size);

class Game extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initBoard(size));
  }

  onSwap(sourceId, destId) {
    alert(`${sourceId} ${destId}`)
    const { dispatch } = this.props;
    dispatch(swapTiles(sourceId, destId));
  }

  onSelect(id) {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <NavigationBar
            title={{ title: 'Match Three' }}
            rightButton={{
              title: 'Reload',
              handler: () => alert('TBD'),
            }}
          />
        </View>
        { this.props.board.tiles &&
          <Board
            tiles={this.props.board.tiles}
            size={size}
            cellSize={cellSize}
            onSwap={this.onSwap}
            onSelect={this.onSelect}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => (
  {
    board: state.board,
  }
);

export default connect(mapStateToProps)(Game);

var styles = StyleSheet.create({
  toolbar: {
    flex: 0,
    width: width,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#646B62',
  },
});
