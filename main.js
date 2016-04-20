import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const {width, height} = require('Dimensions').get('window');
const size = 8;
var cellSize = Math.floor(width / size);
var letterSize = Math.floor(cellSize * .75);

export default class MatchThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        {[...Array(size)].map((x, xIndex) =>
          [...Array(size)].map((y, yIndex) =>
            <View key={xIndex*size+yIndex}
                  style={styles.tile, {left: cellSize * xIndex, top: cellSize * yIndex}}>
              <Text style={styles.letter}>A</Text>
            </View>
          )
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: cellSize * size,
    height: cellSize * size,
    backgroundColor: '#F5FCFF',
  },
  tile: {
    position: 'absolute',
    width: cellSize,
    height: cellSize,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#333',
    fontSize: letterSize,
  },
});
