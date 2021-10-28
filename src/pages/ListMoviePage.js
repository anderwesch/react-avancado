import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

import { getMovies } from '../services/api';

const columns = [
  { field: "title", headerName: 'Titulo do Filme', width: 300 },
  { field: "director", headerName: 'Diretor', width: 150 },
  { field: "writers", headerName: 'Reteristas', width: 150 },
  { field: "releaseDate", headerName: 'Data de Lançamento', width: 150 },
  { field: "timeDuration", headerName: 'Duração', width: 150 },
];

function ListMoviePage () {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    document.title = "Listar"
    getMoviesFromApi();
  }, []);

  async function getMoviesFromApi() {
    const response = await getMovies();
    const data = response.data.map((movie) => {
      movie.id = movie.movieId;
      return movie;
    })
    setRows(data);
  }

  return (
    <Container component="main">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Filmes
        </Typography>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid columns={columns} rows={rows} checkboxSelection/>
        </div>
      </Box>
    </Container>
  );
}

export default ListMoviePage;