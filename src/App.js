import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Box, Container, createTheme, Stack, textFieldClasses, ThemeProvider } from '@mui/material';
import SideBar from './components/sideBar';
import Feed from './components/feed';
import RightBar from './components/rightBar'; 
import { useState } from 'react';
function App() {
  const [theme, setTheme] =useState("dark")
  const darkTheme= createTheme({
    palette: {
      mode:theme,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"}  color={"text.primary"} p={0}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setTheme={setTheme}  theme={theme}/>
        <Feed/>
        <RightBar/>
      </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
