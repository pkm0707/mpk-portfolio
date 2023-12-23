import './App.css';
import { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Home } from './components/Home';
function App() {
  const navigate = useNavigate()
  const[mode,setMode]=useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={()=>navigate("/")}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}
              >
                MPK
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button className='appbar-btn' onClick={()=>navigate("/")}>Home</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button className='appbar-btn' onClick={()=>navigate("/about")}>About</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button className='appbar-btn' onClick={()=>navigate("/projects")}>Projects</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button className='appbar-btn' onClick={()=>navigate("/contact")}>Contact</Button>
                  </MenuItem>
                </Menu>
              </Box>
              <CatchingPokemonIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                onClick={()=>navigate("/")}
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}
              >
                MPK
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button onClick={()=>navigate("/")} className='appbar-btn' sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                <Button onClick={()=>navigate("/about")} className='appbar-btn' sx={{ my: 2, color: 'white', display: 'block' }}>About</Button>
                <Button onClick={()=>navigate("/projects")} className='appbar-btn' sx={{ my: 2, color: 'white', display: 'block' }}>Projects</Button>
                <Button onClick={()=>navigate("/contact")} className='appbar-btn' sx={{ my: 2, color: 'white', display: 'block' }}>Contact</Button>
              </Box>
              <IconButton onClick={()=>setMode(mode === "light" ? "dark" : "light")} sx={{marginRight:2}}>
                {mode === "light" ? <LightModeIcon/> : <DarkModeIcon/>}
              </IconButton>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="pk" src="https://t4.ftcdn.net/jpg/03/30/34/69/240_F_330346955_vdqBacC2osDMnTFwBo6EpWbsZBQobgqN.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button textAlign="center" className='appbar-btn' onClick={()=>navigate("/profile")}>Profile</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button textAlign="center" className='appbar-btn' onClick={()=>navigate("/resume")}><Tooltip title="Download Resume">Resume</Tooltip></Button>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
