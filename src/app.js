import React, {
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const size = 8
const cellSize = Math.floor(Dimensions.get('window') / size)
const letterSize = Math.floor(cellSize * .75)

export default class MatchThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        {[...Array(size)].map((x, xIndex) =>
          [...Array(size)].map((y, yIndex) =>
            <View
                key={xIndex*size+yIndex}
                style={styles.tile, {left: cellSize * xIndex, top: cellSize * yIndex}}
            >
              <Text style={styles.letter}>B</Text>
            </View>
          )
        )}
      </View>
    )
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
})
