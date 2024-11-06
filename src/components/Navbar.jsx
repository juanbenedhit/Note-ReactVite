import { Box, Input, InputAdornment, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar({ onSearch }) {
  return (
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <h1>Note</h1>
      </Box>
      <Box>
        <Input
          placeholder="Cari catatan..."
          onChange={(e) => onSearch(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          sx={{ width: '250px' }}
        />
      </Box>
    </Toolbar>
  );
}