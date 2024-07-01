import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { cat } = route.params;

  const [userData, setUserData] = useState({ username: '', name: '' });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = JSON.parse(jsonValue);
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data from AsyncStorage', error);
      }
    };
    fetchData();
  }, []);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={goToProfile}>
          <View style={[styles.flex, styles.card, { backgroundColor: '#fff', marginBottom: 20, borderWidth: 1, borderColor: '#ddd' }]}>
            <Image style={[styles.profile, { marginRight: 10 }]} source={require('../assets/profile.jpg')} />
            <View>
              <View style={{ flexDirection: 'column', justifyContent: 'center', paddingVertical: 5 }}>
                <View>
                  <Text style={[styles.textUser, { color: '#000' }]}>{userData.name}</Text>
                  <Text style={{ color: '#000' }}>@{userData.username}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Image source={{ uri: `https://cataas.com/cat/${cat._id}` }} style={styles.image} />
        <View style={styles.tagsContainer}>
          <Text style={{ color: '#000' }}>Tags: </Text>
          {cat.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  flex: {
    width: 300,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    borderRadius: 7
  },
  textUser: {
    fontWeight: '900'
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  card: {
    padding: 10,
    borderColor: '#000',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 7,
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    color: '#000',
    borderRadius: 10,
  },
});

export default DetailScreen;
