import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function Input({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    const newNote = {
      id: +new Date(),
      title: title.trim(),
      body: body.trim(),
      archived: false,
      createdAt: new Date().toISOString()
    };

    onAddNote(newNote);
    setTitle('');
    setBody('');
  };

  const newNote = {
    id: +new Date(),
    title: title.trim(),
    body: body.trim(),
    archived: false,
    createdAt: new Date().toISOString()
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <TextField
        fullWidth
        label="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
        margin="normal"
        helperText={`${maxTitleLength - title.length} karakter tersisa`}
      />
      <TextField
        fullWidth
        label="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Tambah Catatan
      </Button>
    </Box>
  );
}