import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper'; // Import komponen TextInput dan Button dari react-native-paper

const LoginView = ({ username, password, setUsername, setPassword, onSubmit, goSignIn }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/icon1.png')}
            />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.text}>Login to your Account</Text>
            <TextInput
              label="Username"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
              placeholder="Enter your username"
              theme={{ colors: { primary: '#000', placeholder: '#999' } }}
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
              placeholder="Enter your password"
              theme={{ colors: { primary: '#000', placeholder: '#999' } }}
            />
            <Button
              mode="contained"
              style={styles.button}
              onPress={onSubmit}
              labelStyle={styles.textButton}
            >
              Login
            </Button>
            <View style={styles.signUpTextContainer}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <Text
                style={styles.signUpLink}
                onPress={goSignIn}
              >Create account
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 300,
  },
  text: {
    color: '#444',
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#000',
  },
  textButton: {
    color: '#fff',
    fontWeight: '500',
  },
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signUpText: {
    fontSize: 12,
    color: '#000',
  },
  signUpLink: {
    fontSize: 12,
    color: '#000',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
});

export default LoginView;
