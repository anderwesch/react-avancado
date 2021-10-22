import './App.css';
import AppHeader from './components/AppHeader'
import Container from '@mui/material/Container';

import CreateMoviePage from './pages/CreateMoviePage'

function App() {
  return (
    <div>
      <AppHeader />
      <Container component="main">
        <CreateMoviePage />
      </Container>
    </div>
  );
}

export default App;
