import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import authLogout from '../Services/auth-Logout';

const pages = [
  { label: 'Control-Panel', link: '/AdminPage' },
  { label: 'User-details', link: '/UserPage' },
];

function NavBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleLogout = async () => {
    try {
      const logoutSuccessful = await authLogout.logout();
      if (logoutSuccessful) {
        console.log('Logout successful');
        window.location.href = '/'; 
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', paddingRight: '3%' }}>
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <img src="evisionlogo.jpeg" alt="logo" className="Logo" />

          {pages.map((page) => (
            <Typography
              key={page.label}
              variant="h6"
              noWrap
              component="a"
              href={page.link}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'black',
                marginLeft: '5%',
                textDecoration: 'none',
                wordSpacing: '2%',
              }}
            >
              {page.label}
            </Typography>
          ))}

          {/* Logout Button */}
          <Button
            variant="outlined"
            color="primary"
            onClick={handleLogout}
            sx={{ marginLeft: 'auto' }} 
          >
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
