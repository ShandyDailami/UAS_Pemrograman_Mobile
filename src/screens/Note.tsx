import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { setupDatabase, addNote, fetchNotes, updateNote, deleteNote } from '../model/Database';

const ExampleApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    initializeDatabase();
  }, []);

  const initializeDatabase = async () => {
    try {
      await setupDatabase();
      loadNotes();
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  };

  const loadNotes = async () => {
    try {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const handleAddNote = async () => {
    try {
      await addNote(title, content);
      setTitle('');
      setContent('');
      loadNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleUpdateNote = async () => {
    if (!selectedNoteId) return;
    try {
      await updateNote(selectedNoteId, title, content);
      setTitle('');
      setContent('');
      setSelectedNoteId(null);
      loadNotes();
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleDeleteNote = async id => {
    try {
      await deleteNote(id);
      loadNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleEditNote = note => {
    setTitle(note.title);
    setContent(note.content);
    setSelectedNoteId(note.id);
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <Text>{item.content}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="Edit" onPress={() => handleEditNote(item)} />
        <Button title="Delete" onPress={() => handleDeleteNote(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
      />
      {selectedNoteId ? (
        <Button title="Update Note" onPress={handleUpdateNote} />
      ) : (
        <Button title="Add Note" onPress={handleAddNote} />
      )}
      <FlatList
        style={{ marginTop: 20 }}
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ExampleApp;
