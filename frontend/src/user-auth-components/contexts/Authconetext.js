import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
  });

  useEffect(() => {
    const loadUser = async () => {
      if (localStorage.getItem('token')) {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
      }

      try {
        const res = await axios.get('/api/auth/user');
        setAuthState({ token: localStorage.getItem('token'), isAuthenticated: true, user: res.data });
      } catch (err) {
        setAuthState({ token: null, isAuthenticated: false, user: null });
      }
    };

    loadUser();
  }, []);

  const register = async (formData) => {
    const res = await axios.post('/api/auth/register', formData);
    localStorage.setItem('token', res.data.token);
    setAuthState({ token: res.data.token, isAuthenticated: true, user: null });
  };

  const login = async (formData) => {
    const res = await axios.post('/api/auth/login', formData);
    localStorage.setItem('token', res.data.token);
    setAuthState({ token: res.data.token, isAuthenticated: true, user: null });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({ token: null, isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
