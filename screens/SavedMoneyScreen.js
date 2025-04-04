import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SavedMoneyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Saved Money Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SavedMoneyScreen;