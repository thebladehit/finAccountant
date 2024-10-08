import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackScreenProps } from '../@types/navigation.ts';

const Signup = ({ navigation }: RootStackScreenProps<'Signup'>) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Create New Account</Text>
        <Text style={styles.subTitle}>
          Please fill in the form to continue!
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="rgb(58, 60, 68)"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
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
        <TextInput
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          style={styles.input}
          placeholder="Confirm password"
          placeholderTextColor="rgb(58, 60, 68)"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: 'rgb(242, 244, 244)' }}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text style={{ color: 'rgb(242, 244, 244)', marginRight: 10 }}>
          Have an Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={{ color: 'rgb(53, 65, 149)' }}>Sign in</Text>
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
    marginTop: 40,
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

export default Signup;
