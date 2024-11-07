import React, { useState } from 'react';
import api from '../../services/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', { username, password });
      alert('Регистрация успешна! Теперь войдите.');
    } catch (error) {
      alert('Ошибка регистрации');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Регистрация</h2>
      <input type="text" placeholder="Имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
