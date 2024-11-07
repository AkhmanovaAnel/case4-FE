import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      const res = await api.get('/surveys');
      setSurveys(res.data);
    };
    fetchSurveys();
  }, []);

  return (
    <div>
      <h2>Анкеты</h2>
      <ul>
        {surveys.map((survey) => (
          <li key={survey._id}>{survey.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyList;
