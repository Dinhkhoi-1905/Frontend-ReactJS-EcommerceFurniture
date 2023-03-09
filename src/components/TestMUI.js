import * as React from 'react';
// import "./App.css";
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
import AdbIcon from '@mui/icons-material/Adb';
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import { Link } from '@mui/material';
//COMOPONENTS
import TestComponent2 from './TestComponent2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import ProductsList from './ProductsList';
import SalePage from './SalePage';
// import Product from './Product';
import ProductDetail from './ProductDetail';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const theme = createTheme({
  palette: {
    primary: {
      main: '#9ccc65',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          color: '#6d1b7b',
          '&:hover': {
            backgroundColor: '#6d8e46',
            color: '#fff',
          },
        },
        containedPrimary: {
          boxShadow: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&:hover': {
            // backgroundColor: '#631976',
            color: '#fff',

            textDecoration: 'none',
            borderRadius: '10px',
          },
        },
      }
    },
  },
});
function TestMUI() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    <Link to={"/ProductsList"} className="nav-link"></Link>
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // sx={{bgcolor: 'green'}}
  return (
    // style={{backgroundColor:'#7cb342'}}
    <ThemeProvider theme={theme}>
      <Container>
        <AppBar position="static" color="primary">
          <Container maxWidth="xl" >
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
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
                    display: { xs: 'flex', md: 'none' },
                  }}
                >
                  {/* Responesive menu */}
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu} href={'/haga'}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}


                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (

                  // <Link to={page} className="nav-link" >
                  //   {page}
                  // </Link>
                  <Button key={page} sx={{ marginLeft: '10px' }}>
                    <Link component={RouterLink} to={page}>
                      {page}
                    </Link>
                  </Button>
                  //  <Link href={page}>Link</Link>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>

        </AppBar>
        <Container>
          <Routes>
            <Route key={1} path="/Products" element={<SalePage />} />
            <Route key={2} path="/Pricing" element={<TestComponent2 />} />

            <Route key={3} path="/Products/:id" element={<ProductDetail />} />
          </Routes>
          <h1>End content</h1>
        </Container>

      </Container>
    </ThemeProvider>
  );
}
export default TestMUI;