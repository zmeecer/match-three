import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import NavigationBar from 'react-native-navbar';
import Board from '../components/board.js';

const size = 6;
const { width } = require('Dimensions').get('window');
const cellSize = Math.floor(width / size);

class Game extends Component {
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
        <Board
          size={size}
          cellSize={cellSize}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#646B62',
  },
});

export default Game;
