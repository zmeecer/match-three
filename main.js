'use strict';

import React, {
  StyleSheet,
  View,
} from 'react-native';
import Board from './board.js';

var Main = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Board/>
      </View>
    )
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#646B62',
  },
});

module.exports = Main;
