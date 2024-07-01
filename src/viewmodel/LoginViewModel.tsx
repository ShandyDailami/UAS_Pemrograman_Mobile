import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../model/Regis';
import { Alert } from 'react-native';

export default class LoginViewModel {
  constructor() {
    this.loginData = new User('', '');
  }

  async checkToken(navigation) {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.navigate('Home');
    }
  }

  async onSubmit(username, password, navigation) {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (username === userData.username && password === userData.password) {
          await AsyncStorage.setItem('token', username);
          Alert.alert('Success', 'You have successfully logged in', [
            { text: 'Next', onPress: () => navigation.navigate('Home') }
          ]);
        } else {
          Alert.alert('Fail', `The ${userData.username} or password you entered is incorrect`);
        }
      } else {
        Alert.alert('Error', 'No registered user found');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Failed to login');
    }
  }

  goSignIn(navigation) {
    navigation.navigate('Regis');
  }
}
