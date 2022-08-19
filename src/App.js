import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Box, Container, Stack } from '@mui/material';
import SideBar from './components/sideBar';
import Feed from './components/feed';
import RightBar from './components/rightBar'; 
function App() {
  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </Box>
  );
}

export default App;
