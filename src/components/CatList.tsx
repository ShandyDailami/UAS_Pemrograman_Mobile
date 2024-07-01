import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import CatItem from './CatItem';
import CatService from '../services/CatService';

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCatsData = async () => {
      try {
        const data = await CatService.fetchCats();
        setCats(data);
        setFilteredCats(data);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCatsData();
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    setTimeout(() => {
      const filtered = cats.filter(cat =>
        cat.tags.some(tag => tag.toLowerCase().includes(text.toLowerCase()))
      );
      setFilteredCats(filtered);
    }, 2000)
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by tag..."
        placeholderTextColor={'#000'}
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredCats}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <CatItem cat={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContainer: {
    paddingTop: 10,
  },
});

export default CatList;
