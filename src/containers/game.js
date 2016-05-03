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

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: width}}>
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
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#646B62',
  },
});
