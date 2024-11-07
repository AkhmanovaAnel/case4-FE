import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import SurveyList from './components/Survey/SurveyList';
import SurveyForm from './components/Survey/SurveyForm';
import SurveyResults from './components/Results/SurveyResults';
import Navbar from './components/Navbar';

const App = () => {
  const [auth, setAuth] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <Navbar />
      <Routes>
        {!auth ? (
          <>
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <>
            <Route path="/" element={<SurveyList />} />
            <Route path="/survey/:id" element={<SurveyForm />} />
            <Route path="/results/:id" element={<SurveyResults />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
