import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CatItem = ({ cat }) => {
  const navigation = useNavigation();
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

  const goDetail = () => {
    navigation.navigate('Detail', { cat });
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.borderBottom}>
      <TouchableOpacity onPress={goDetail}>
        <View style={[styles.flex, styles.card]}>
          <View>
            <TouchableOpacity onPress={goToProfile}>
              <Image style={[styles.profile, { marginRight: 10 }]} source={require('../assets/profile.jpg')} />
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', paddingVertical: 5 }}>
              <View style={styles.flex}>
                <Text style={[styles.textUser, { color: '#000' }]}>{userData.name}</Text>
                <Text style={{ color: '#000' }}>@{userData.username}</Text>
              </View>
              <Text style={{ color: '#000' }}>Ini adalah tulisan</Text>
            </View>
            <View>
              <Image source={{ uri: `https://cataas.com/cat/${cat._id}` }} style={styles.image} />
              <View style={styles.tagsContainer}>
                {cat.tags.map((tag, index) => (
                  <Text key={index} style={styles.tag}>{tag}</Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    gap: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000'
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
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#aaa',
    paddingBottom: 5
  },
  quotesCard: {
    paddingVertical: 10
  },
  textCard: {
    fontSize: 17
  },
  textUser: {
    fontWeight: '900'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    display: 'none'
  },
});

export default CatItem;
