import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MatchThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tile}>
          <Text style={styles.letter}>
            A
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tile: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#333',
    fontSize: 80,
  },
});
