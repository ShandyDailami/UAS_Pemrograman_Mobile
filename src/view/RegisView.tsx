import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const RegisView = ({ name, setName, username, setUsername, email, setEmail, phone, setPhone, setPassword, password, setConfirmPassword, confirmPassword, onSubmit, goSignUp }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              style={styles.logo}
              source={require('../assets/icon1.png')}
            />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.text}>Sign Up for an Account</Text>
            <TextInput
              style={styles.input}
              label="Name"
              onChangeText={setName}
              value={name}
            />
            <TextInput
              style={styles.input}
              label="Username"
              onChangeText={setUsername}
              value={username}
            />
            <TextInput
              style={styles.input}
              label="Email"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.input}
              label="Phone"
              onChangeText={setPhone}
              value={phone}
            />
            <TextInput
              style={styles.input}
              secureTextEntry
              label="Password"
              onChangeText={setPassword}
              value={password}
            />
            <TextInput
              style={styles.input}
              secureTextEntry
              label="Confirm Password"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={onSubmit}>
              <Text style={styles.textButton}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 5, flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>Already have an account?</Text>
              <TouchableOpacity onPress={goSignUp}>
                <Text style={{ textDecorationLine: 'underline', fontSize: 12 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
  formContainer: {
    width: '100%',
    maxWidth: 300,
  },
  logo: {
    borderRadius: 5,
    width: 100,
    height: 100,
    marginBottom: 20,
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
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 2,
    backgroundColor: '#000',
  },
});

export default RegisView;
