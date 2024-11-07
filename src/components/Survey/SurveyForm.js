import React, { useState } from 'react';
import api from '../../services/api';

const SurveyForm = ({ survey }) => {
  const [responses, setResponses] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/responses`, { surveyId: survey._id, answers: responses });
      alert('Ответы отправлены!');
    } catch (error) {
      alert('Ошибка отправки ответов');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{survey.title}</h3>
      {survey.questions.map((q, idx) => (
        <div key={idx}>
          <label>{q.questionText}</label>
          {q.questionType === 'text' && (
            <input
              type="text"
              onChange={(e) => setResponses({ ...responses, [q._id]: e.target.value })}
            />
          )}
          {/* Добавьте обработку других типов вопросов */}
        </div>
      ))}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default SurveyForm;
