import React, {
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
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.click(this.props.id)}>
        <View
          style={[
            styles.tile, {
              width: this.props.cellSize,
              height: this.props.cellSize,
              left: this.props.position.left,
              top: this.props.position.top,
            }
          ]}>
          <Text style={styles.letter}>{this.props.id}</Text>
        </View>
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
