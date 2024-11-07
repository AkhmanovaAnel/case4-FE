import React, { useState } from 'react';
import api from '../../services/api';

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      setAuth(true);
      alert('Вход успешен!');
    } catch (error) {
      alert('Ошибка входа');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Вход</h2>
      <input type="text" placeholder="Имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;
