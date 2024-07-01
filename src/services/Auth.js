import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = {
  saveToken: async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      throw new Error('Failed to save token');
    }
  },

  checkLogin: async (value) => {
    try {
      const value = await AsyncStorage.getItem('token');
      return value !== null;
    } catch {
      return false;
    }
  },

  register: async (name, username, email, phone, password, confirmPassword) => {
    try {
      if (password !== confirmPassword) {
        throw new Error('Password and confirm password do not match');
      }

      const userData = {
        name,
        username,
        email,
        phone,
        password
      };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      return true;
    } catch (error) {
      throw new Error('Failed to register');
    }
  },

  deleteAccount: async () => {
    try {
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.removeItem('token')
      return true;
    } catch (error) {
      throw new Error('Failed to delete account');
    }
  },

  updateAccount: async (name, username, email, phone) => {
    try {
      const userData = {
        name,
        username,
        email,
        phone
      };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      return true;
    } catch (error) {
      throw new Error('Failed to update account');
    }
  }
};

export default Auth;
