import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import './App.css';
import { getInitialData } from './utils';

import Navbar from './components/Navbar';
import Input from './components/Input';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('Current notes:', notes);
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter(note => !note.archived);
  const archivedNotes = filteredNotes.filter(note => note.archived);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleToggleArchive = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  return (
    <Container data-notes={JSON.stringify(notes)}>
      <Navbar onSearch={setSearchQuery} />
      <Input onAddNote={handleAddNote} />
      
      <Typography variant="h5" sx={{ mt: 4 }}>Catatan Aktif</Typography>
      <Grid container spacing={2}>
        {activeNotes.length > 0 ? (
          activeNotes.map(note => (
            <Grid item xs={12} md={6} lg={4} key={note.id}>
              <Note 
                note={note}
                onDelete={handleDeleteNote}
                onToggleArchive={handleToggleArchive}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography sx={{ p: 2 }}>Tidak ada catatan aktif</Typography>
          </Grid>
        )}
      </Grid>

      <Typography variant="h5" sx={{ mt: 4 }}>Arsip</Typography>
      <Grid container spacing={2}>
        {archivedNotes.length > 0 ? (
          archivedNotes.map(note => (
            <Grid item xs={12} md={6} lg={4} key={note.id}>
              <Note 
                note={note}
                onDelete={handleDeleteNote}
                onToggleArchive={handleToggleArchive}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography sx={{ p: 2 }}>Tidak ada catatan diarsipkan</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default App;