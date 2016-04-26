'use strict';

import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';
import Board from './board.js';

const size = 6;
const { width } = require('Dimensions').get('window');
const cellSize = Math.floor(width / size);

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#646B62',
  },
});

export default Main;
