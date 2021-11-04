import './App.css';
import AppHeader from './components/AppHeader'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CreateMoviePage from './pages/CreateMoviePage'
import ListMoviePage from './pages/ListMoviePage'
import UpdateMoviePage from './pages/UpdateMoviePage'
import LoginPage from './pages/LoginPage'

import { useContext } from 'react';
import { AuthContext } from './context/authContext';

function App() {
  const context = useContext(AuthContext);
  return (
    <BrowserRouter>
      { context.isAuthenticated ? <AppHeader /> : null }
      <Switch>
        <PrivateRoute exact path="/">
          <ListMoviePage />
        </PrivateRoute>
        <PrivateRoute path="/create">
          <CreateMoviePage />
        </PrivateRoute>
        <PrivateRoute path="/update/:id/">
          <UpdateMoviePage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({ children, ...rest }) {
  const context = useContext(AuthContext);
  return (
    <Route { ...rest }>
      { context.isAuthenticated ? children : <Redirect to="/login" /> }
    </Route>
  );
}

export default App;
