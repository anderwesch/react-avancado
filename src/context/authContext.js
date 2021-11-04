import React from 'react';
import { authenticate } from '../services/api';

const AuthContext = React.createContext({});

function AuthProvider(props) {
  const [token, setToken] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState({ id: null, name: "" });

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setToken(token);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  React.useEffect(() => {
    if (token === null) {
      localStorage.removeItem("token")
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }

    setIsAuthenticated((token !== null));
  }, [token, user]);

  async function login(login, password) {
    const response = await authenticate(login, password);
    if (response.status === 200 && response.data.auth === true) {
      setToken(response.data.token);
      setUser({ id: 1, name: "Anderson" });
      return true;
    }
    return false;
  }

  function logout() {
    setToken(null);
    setUser({ id: null, name: null });
  }

  return (
    <AuthContext.Provider value={{
      token,
      user: user,
      isAuthenticated,
      login: login,
      logout: logout
    }}>
      { props.children }
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };