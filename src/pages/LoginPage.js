import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";

import { authenticate } from '../services/api'
import { isAuthenticated, login } from '../services/auth';

function LoginPage() {
  const [fields, setFields] = useState({ login: "", password: "" });
  const history = useHistory();

  useEffect(() => {
    if(isAuthenticated()) {
      history.push("/");
    }
  }, []);

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await authenticate(fields.login, fields.password);
    if (response.status === 200 && response.data.auth === true) {
      login(response.data.token);
      history.push("/");
    }
  }

  return(
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      <Typography variant="h5">
        Entrar
      </Typography>
      <Box component="form" onSubmit={ handleSubmit }>
        <TextField
          margin="normal"
          label="Usuário"
          variant="outlined"
          fullWidth
          name="login"
          value={ fields.login }
          onChange={ handleChange }
        />
        <TextField
          margin="normal"
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          name="password"
          value={ fields.password }
          onChange={ handleChange }
        />
        <Button 
          variant="contained"
          fullWidth
          size="large"
          type="submit"
        >
          Entrar
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;