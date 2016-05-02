import React, {
  Animated,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PropTypes,
} from 'react-native';

const colors = [
  "#FFFC19",
  "#5B86CC",
  "#38FF49",
  "#FF5C4D",
  "#E4A6FF",
  "#937DB2",
];

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0.7),
      fadeAnim: new Animated.Value(0),
      left: new Animated.Value(this.props.left*this.props.cellSize),
      top: new Animated.Value(this.props.top*this.props.cellSize),
    }
  }

  getColor(index) {
    return colors[index];
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.left != this.props.left) {
      Animated.timing(
        this.state.left,
        { toValue: nextProps.left*nextProps.cellSize, duration: 2000 }
      ).start();
      return false;
    }
    if (nextProps.top != this.props.top) {
      Animated.timing(
        this.state.top,
        { toValue: nextProps.top*nextProps.cellSize, duration: 2000 }
      ).start();
      return false;
    }
    return true;
  }

  componentDidMount() {
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
    return (
      <TouchableOpacity
        onPress={this.props.click}>
        <Animated.View
          style={[
            styles.tile, {
              backgroundColor: this.getColor(this.props.type),
              width: this.props.cellSize,
              height: this.props.cellSize,
              left: this.state.left,
              top: this.state.top,
              opacity: this.props.selected ? 0.5 : this.state.fadeAnim,
              transform: [
                { scale: this.state.bounceValue },
              ]
            }
          ]}>
          <Text style={styles.letter}>
            {this.props.label}/{this.props.left}-{this.props.top}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default Tile;

const styles = StyleSheet.create({
  tile: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    color: '#333',
    fontSize: 24,
  },
});
