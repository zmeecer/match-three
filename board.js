import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const {width, height} = require('Dimensions').get('window');
const size = 6;
var cellSize = Math.floor(width / size);
var letterSize = Math.floor(cellSize * .75);

export default class MatchThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        {[...Array(size)].map((x, xIndex) =>
          [...Array(size)].map((y, yIndex) => (
            <TouchableOpacity key={xIndex*size+yIndex}
              onPress={() => console.log(xIndex*size+yIndex) }>
              <View style={[styles.tile, {left: cellSize * xIndex, top: cellSize * yIndex}]}>
                <Text style={styles.letter}>{xIndex*size+yIndex}</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: cellSize * size,
    height: cellSize * size,
    backgroundColor: '#ddFCFF',
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
