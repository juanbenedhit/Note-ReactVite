import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';

export default function Note({ note, onDelete, onToggleArchive }) {
  return (
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Typography variant="h6">{note.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(note.createdAt).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {note.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          onClick={() => onToggleArchive(note.id)}
          startIcon={note.archived ? <UnarchiveIcon /> : <ArchiveIcon />}
        >
          {note.archived ? 'Pindahkan' : 'Arsipkan'}
        </Button>
        <Button 
          size="small" 
          color="error" 
          onClick={() => onDelete(note.id)}
          startIcon={<DeleteIcon />}
        >
          Hapus
        </Button>
      </CardActions>
    </Card>
  );
}