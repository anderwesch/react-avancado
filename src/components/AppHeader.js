import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/authContext';

function AppHeader() {
  const { user, logout }  = React.useContext(AuthContext);

  function handlerClickLogout(event) {
    logout();
  }

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ mr: 10 }}>
              Movies
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit" component={ Link } to="/">Home</Button>
              <Button color="inherit" component={ Link } to="/create">Cadastrar Filme</Button>
            </Box>
            <Typography sx={{ marginRight: 2 }}>Olá { user.name }</Typography>
            <IconButton color="inherit" onClick={ handlerClickLogout }><LogoutIcon /></IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );

}

export default AppHeader;