'use strict';

import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Board from './board.js';

const size = 6;
const { width } = require('Dimensions').get('window');
const cellSize = Math.floor(width / size);

class Main extends Component {
  render() {
    const rightButtonConfig = {
      title: 'Reload',
      handler: () => alert('TBD'),
    };

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: width,}}>
          <NavigationBar
            title={{ title: 'Match Three' }}
            rightButton={ rightButtonConfig }
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

export default Main;
