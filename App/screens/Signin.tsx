import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Signin = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Please sign in to your account!</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgb(58, 60, 68)"
          autoCapitalize="none"
          autoCorrect={false}
        />
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
        <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: '10%' }}>
          <Text style={styles.subTitle}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: 'rgb(242, 244, 244)' }}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text style={{ color: 'rgb(242, 244, 244)', marginRight: 10 }}>
          Don't have an Account?
        </Text>
        <TouchableOpacity>
          <Text style={{ color: 'rgb(53, 65, 149)' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    color: 'rgb(242, 244, 244)',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  subTitle: {
    color: 'rgb(76, 78, 82)',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70,
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
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 70,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: 'rgb(60, 72, 237)',
  },
});

export default Signin;
