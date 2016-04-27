import React, {
  Animated,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PropTypes,
} from 'react-native';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1),
    }
  }

  render() {
    let scale = this.props.selected ? 0.9 : this.state.bounceValue;
    return (
      <TouchableOpacity
        onPress={this.props.click}>
        <Animated.View
          style={[
            styles.tile, {
              width: this.props.cellSize,
              height: this.props.cellSize,
              left: this.props.position.left,
              top: this.props.position.top,
              transform: [
                { scale: scale },
              ]
            }
          ]}>
          <Text style={styles.letter}>{this.props.label}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

// Tile.propTypes = {
//   id: propTypes.string.isRequired,
//   position: PropTypes.object.isRequired,
//   click: propTypes.func.isRequired,
// }

export default Tile;

const styles = StyleSheet.create({
  tile: {
    position: 'absolute',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#333',
    fontSize: 50,
  },
});
