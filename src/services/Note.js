import { setupDatabase, addNote, fetchNotes, deleteNote } from '../model/Database';

const initializeDatabase = () => {
  return setupDatabase();
};

const createNote = (text) => {
  return addNote(text);
};

const getAllNotes = () => {
  return fetchNotes();
};

const removeNote = (id) => {
  return deleteNote(id);
};

export { initializeDatabase, createNote, getAllNotes, removeNote };
