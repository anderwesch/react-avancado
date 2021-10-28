import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { useLocation } from 'react-router-dom';

import { createMovie } from '../services/api'

const movie = {
  title: "",
  director: "", 
  writers: "", 
  releaseDate: "", 
  timeDuration: ""
}

function CreateMoviePage() {

  const [ fields, setFields ] = useState(movie);
  const location = useLocation();

  useEffect(() => {
    console.log("Teste", location);
    document.title = "Cadastrar"
  }, []);

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(fields);
    const response = await createMovie(fields);
    if (response.status === 200) {
      setFields(movie);
    }
  }

  return(
    <Container component="main">
      <Box component="form" onSubmit={ handleSubmit } sx={{ mt: 5 }}>
        <Typography variant="h4">
          Novo Filme
        </Typography>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item sm={12}>
            <TextField 
              label="Titulo" 
              variant="outlined" 
              name="title"
              fullWidth 
              onChange={ handleChange } 
              value={fields.title} 
            />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Diretor" variant="outlined" name="director" fullWidth onChange={ handleChange } value={fields.director} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Roteiristas" variant="outlined" name="writers" fullWidth onChange={ handleChange } value={fields.writers} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Data lançamento" variant="outlined" name="releaseDate" fullWidth onChange={ handleChange } value={fields.releaseDate} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Tempo de duração" variant="outlined" name="timeDuration" fullWidth onChange={ handleChange } value={fields.timeDuration} />
          </Grid>
          <Grid item sm={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large" 
            >
              Cadastrar filme
            </Button> 
          </Grid>
        </Grid>     
      </Box>
    </Container>
  );
}

export default CreateMoviePage;