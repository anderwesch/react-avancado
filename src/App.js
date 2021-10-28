import './App.css';
import AppHeader from './components/AppHeader'
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import CreateMoviePage from './pages/CreateMoviePage'
import ListMoviePage from './pages/ListMoviePage'
import UpdateMoviePage from './pages/UpdateMoviePage'

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route exact path="/">
          <ListMoviePage />
        </Route>
        <Route path="/create">
          <CreateMoviePage />
        </Route>
        <Route path="/update/:id/:slug">
          <UpdateMoviePage />
        </Route>
        <Route>
          404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
