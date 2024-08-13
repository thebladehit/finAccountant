import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ChangePassword = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Change password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgb(58, 60, 68)"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgb(58, 60, 68)"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {error && <Text style={styles.textError}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={{ color: 'rgb(242, 244, 244)', fontWeight: 700 }}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(21, 22, 25)',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
  },
  input: {
    height: 70,
    width: '80%',
    backgroundColor: 'rgb(30, 32, 37)',
    color: 'rgb(242, 244, 244)',
    borderRadius: 20,
    fontSize: 16,
    padding: 20,
    marginBottom: 15,
  },
  title: {
    color: 'rgb(242, 244, 244)',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 70,
    borderRadius: 20,
    backgroundColor: 'rgb(60, 72, 237)',
  },
  textError: {
    color: 'rgb(188,37,37)',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: '10%',
    alignSelf: 'flex-start',
  },
});

export default ChangePassword;
