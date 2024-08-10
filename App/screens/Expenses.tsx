import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Expenses = () => {
  return (
    <View style={styles.container}>
      <Text>Expenses page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(21, 22, 25)',
  },
});

export default Expenses;
