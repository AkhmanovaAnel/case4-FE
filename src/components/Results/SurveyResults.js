import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../services/api';

const SurveyResults = ({ surveyId }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      const res = await api.get(`/responses/results/${surveyId}`);
      setData({
        labels: res.data.questions,
        datasets: [
          {
            label: 'Результаты',
            data: res.data.responses,
            backgroundColor: 'rgba(75,192,192,0.4)',
          },
        ],
      });
    };
    fetchResults();
  }, [surveyId]);

  return <Bar data={data} />;
};

export default SurveyResults;
