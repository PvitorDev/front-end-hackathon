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
import orangelogo from '../../assets/orange.png'
const pages = ['Trilhas', 'Planos de estudos', 'Comunidade'];
const settingsTrilhas = ['fullstack',"QA","UX/UI"]
const settings = ['Perfil', 'Logout'];
import { clearLocalItem, getLocalItem } from '../../utils/localStorage';
import './style.css'
import { useNavigate } from 'react-router-dom';
export default function ResponsiveAppBar({ setIsActive }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const nome_usuario = getLocalItem('nome_usuario')
  const token = getLocalItem('token')
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserProfile = () => {
    setAnchorElUser(null);
    navigate("/perfil")
   
  };

  const handleCloseUser = () => {
    setAnchorElUser(null);
    
  };
  const handleCloseUserLogout = () => {
    setAnchorElUser(null);
    clearLocalItem()
    navigate("/")
  };
  function formatName(name) {
    const newName = name.substr(0, 2).toUpperCase();

    return newName
  }
  const openLogin = () =>{
    setAnchorElUser(null);
    setIsActive(true)
  }
  function handleOpenTrilhas (){
          navigate("/")
  }
  function handleClosePlanos(){
        navigate("/planos")
  }
  function handleCloseComunidade(){
       navigate("/comunidade")
  }
  return (
    <AppBar position="static" id='appBar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <a href='/'> <img className='logoPrincipal' src={orangelogo} alt='Logo'/></a>
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
             <MenuItem onClick={handleOpenTrilhas}>
                  <Typography textAlign="center">TRILHAS</Typography>
                </MenuItem>
                <MenuItem onClick={handleClosePlanos}>
                  <Typography textAlign="center">PLANO DE ESTUDOS</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseComunidade}>
                  <Typography textAlign="center">COMUNIDADE</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <a href='/'>
          <img className='logoResponsivel' src={orangelogo} alt='Logo'/></a>
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
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <MenuItem onClick={handleOpenTrilhas}>
                  <Typography textAlign="center">TRILHAS</Typography>
                </MenuItem>
                <MenuItem onClick={handleClosePlanos}>
                  <Typography textAlign="center">PLANO DE ESTUDOS</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseComunidade}>
                  <Typography textAlign="center">COMUNIDADE</Typography>
                </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                {token ? <Avatar alt="Remy Sharp" onClick={handleOpenUserMenu} src="/static/images/avatar/2.jpg">{formatName(nome_usuario)}</Avatar>   :  <Avatar onClick={openLogin} src="/broken-image.jpg" />}
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
              onClose={handleCloseUser}
            >
              <MenuItem onClick={handleCloseUserProfile}>
                <Typography textAlign="center">{settings[0]}</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserLogout}>
                <Typography textAlign="center">{settings[1]}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}