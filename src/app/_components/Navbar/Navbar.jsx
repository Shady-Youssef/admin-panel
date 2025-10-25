'use client'
import * as React from 'react';
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
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';



const pages = ['Service Dashboard', 'Finance Forecast', 'Human Resources', 'Users', 'Compliances & Verification'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {

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
    <>
    <AppBar sx={{bgcolor:'#F4F7F9'}} position="static">
      <Container  maxWidth>
        <Toolbar sx={{px:{xs:0,md:10}}} disableGutters>
            {/* Mobile View */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
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
              sx={{display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         {/* Desktop View */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ textTransform:'capitalize',fontWeight:'500',my: 2, color: page === 'Human Resources' ? '#1A78F2' : '#282525ff', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box sx={{color:'#677582', gap:'40px' ,display:'flex' ,justifyContent:'center', alignItems:'center'}}>
                        <NotificationsNoneIcon ></NotificationsNoneIcon>
                        <ForumOutlinedIcon ></ForumOutlinedIcon>
                        <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                     <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
                     </IconButton>
            </Tooltip>
                        </Box>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', ml:1}}>
                    <Typography variant="body2" color="#324054">Max Smith</Typography>
                    <Typography variant="body2" color="#4F6071">London, UK</Typography>
                    </Box>
                </Box>
                
              
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
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}
