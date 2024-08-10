import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Income = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Income page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(21, 22, 25)',
  },
});

export default Income;
