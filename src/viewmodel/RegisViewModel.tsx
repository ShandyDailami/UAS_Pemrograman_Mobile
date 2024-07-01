import User from '../model/Regis';
import Auth from '../services/Auth';
import { Alert } from 'react-native';

class RegisViewModel {
  constructor() {
    this.regisData = new User('', '', '', '', '', '');
  }

  async onSubmit(name, username, email, phone, password, confirmPassword, navigation) {
    if (!name || !username || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    try {
      const isSuccess = await Auth.register(name, username, email, phone, password, confirmPassword);
      if (isSuccess) {
        Alert.alert('Success', 'You have successfully registered', [
          { text: "Next", onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        Alert.alert('Fail', 'Failed to register', [
          { text: "Return", onPress: () => navigation.navigate('Regis') }
        ]);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to register', [
        { text: "Return", onPress: () => navigation.navigate('Regis') }
      ]);
    }
  }

  goSignUp(navigation) {
    navigation.navigate('Login');
  }

  async registerUser(name, username, email, phone, password, confirmPassword) {
    try {
      const newUser = new User(name, username, email, phone, password, confirmPassword);
      const isSuccess = await Auth.register(newUser);
      return isSuccess;
    } catch (error) {
      throw error;
    }
  }
}

export default RegisViewModel;
