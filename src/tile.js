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
      bounceValue: new Animated.Value(0.7),
      fadeAnim: new Animated.Value(0),
      left: new Animated.Value(this.props.position.left),
      top: new Animated.Value(this.props.position.top),
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.position.left != this.props.position.left) {
      Animated.timing(
        this.state.left,
        { toValue: nextProps.position.left, duration: 200 }
      ).start();
      return false;
    }
    if (nextProps.position.top != this.props.position.top) {
      Animated.timing(
        this.state.top,
        { toValue: nextProps.position.top, duration: 200 }
      ).start();
      return false;
    }
    return true;
  }

  componentDidMount() {
    console.log("did mount");
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1, duration: 500}
    ).start();
    Animated.timing(
      this.state.bounceValue,
      {toValue: 1}
    ).start();
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
              left: this.state.left,
              top: this.state.top,
              opacity: this.state.fadeAnim,
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
