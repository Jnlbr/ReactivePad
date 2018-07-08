import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Routes from './src/routes';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
});

export default App