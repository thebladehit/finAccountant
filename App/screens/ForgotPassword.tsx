import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

  const handleSendEmail = () => {
    if (email.length <= 4) {
      setError('Email is too short');
      return;
    }
    if (error.length !== 0) setError('');
    setIsEmailSent(true);
  };

  const handleSendCode = () => {
    if (isCodeSent) return;
    setIsCodeSent(true);
    // TODO if everything good go to changePass screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Forgot password?</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={
            isEmailSent
              ? { ...styles.input, ...styles.inputDisabled }
              : styles.input
          }
          placeholder="Email"
          placeholderTextColor="rgb(58, 60, 68)"
          autoCapitalize="none"
          autoCorrect={false}
          editable={!isEmailSent}
        />
        {isEmailSent && (
          <TextInput
            value={code}
            onChangeText={setCode}
            style={
              isCodeSent
                ? { ...styles.input, ...styles.inputDisabled }
                : styles.input
            }
            placeholder="Code from email"
            placeholderTextColor="rgb(58, 60, 68)"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isCodeSent}
          />
        )}
        {error && <Text style={styles.textError}>{error}</Text>}
        {!isEmailSent && (
          <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
            <Text style={{ color: 'rgb(242, 244, 244)', fontWeight: 700 }}>
              Send email
            </Text>
          </TouchableOpacity>
        )}
        {isCodeSent && <ActivityIndicator size="large" style={{ marginBottom: 15 }} />}
        {isEmailSent && (
          <TouchableOpacity style={styles.button} onPress={handleSendCode}>
            <Text style={{ color: 'rgb(242, 244, 244)', fontWeight: 700 }}>
              Verify code
            </Text>
          </TouchableOpacity>
        )}
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
  inputDisabled: {
    color: 'rgb(159,159,159)',
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

export default ForgotPassword;
