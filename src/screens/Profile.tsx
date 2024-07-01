import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, TextInput } from 'react-native';
import Auth from '../services/Auth';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

  const [userData, setUserData] = useState({ username: '', name: 'shandy', email: '', phone: '' });
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = JSON.parse(jsonValue);
        setUserData(data);
        setEditedData(data);
      } catch (error) {
        console.error('Failed to fetch user data from AsyncStorage', error);
      }
    };
    fetchData();
  }, []);

  const handleEditProfile = async () => {
    if (editMode) {
      try {
        await Auth.updateAccount(editedData.name, editedData.username, editedData.email, editedData.phone);
        setUserData(editedData);
        setEditMode(false);
        Alert.alert('Success', 'Profile updated successfully');
      } catch (error) {
        console.error('Failed to update profile', error);
        Alert.alert('Error', 'Failed to update profile');
      }
    } else {
      setEditMode(true);
    }
  };

  const handleDeleteAccount = async () => {
    if (editMode) {
      setEditMode(false);
    } else {
      try {
        const deleted = await Auth.deleteAccount();
        if (deleted) {
          Alert.alert('Success', 'Account deleted successfully');
          navigation.navigate('Login');
        } else {
          Alert.alert('Error', 'Failed to delete account');
        }
      } catch (error) {
        console.error('Delete account error', error);
        Alert.alert('Error', 'Failed to delete account');
      }
    }
  };

  const handleChangeText = (key, value) => {
    setEditedData({ ...editedData, [key]: value });
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token')
    navigation.navigate('Login')
  }

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={editedData.name}
            onChangeText={(text) => handleChangeText('name', text)}
          />
        ) : (
          <View style={styles.box}>
            <Text style={styles.text}>Name: {userData.name}</Text>
          </View>
        )}
        {editMode ? (
          <TextInput
            style={styles.input}
            value={editedData.username}
            onChangeText={(text) => handleChangeText('username', text)}
          />
        ) : (
          <View style={styles.box}>
            <Text style={styles.text}>Username: {userData.username}</Text>
          </View>
        )}
        {editMode ? (
          <TextInput
            style={styles.input}
            value={editedData.email}
            onChangeText={(text) => handleChangeText('email', text)}
          />
        ) : (
          <View style={styles.box}>
            <Text style={styles.text}>Email: {userData.email}</Text>
          </View>
        )}
        {editMode ? (
          <TextInput
            style={styles.input}
            value={editedData.phone}
            onChangeText={(text) => handleChangeText('phone', text)}
          />
        ) : (
          <View style={styles.box}>
            <Text style={styles.text}>Phone: {userData.phone}</Text>
          </View>
        )}
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
            <Text style={styles.buttonText}>{editMode ? 'Submit' : 'Edit'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleDeleteAccount}>
            <Text style={styles.buttonText}>{editMode ? 'Cancel' : 'Delete Account'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={logout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  box: {
    borderColor: '#bbb',
    backgroundColor: '#eee',
    borderRadius: 5,
    borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 4,
    marginBottom: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  input: {
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Profile;
