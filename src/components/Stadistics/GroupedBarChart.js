import React from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import 'moment/locale/en-ca';

const data = {
  labels: moment.monthsShort(),
  datasets: [
    {
      label: 'Expenses',
      data: [12, 19, 3, 5, 2, 3, 5, 7, 8, 9, 1, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Transferences',
      data: [2, 3, 20, 5, 1, 4, 5, 4, 2, 4, 5, 6],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Incomes',
      data: [3, 10, 13, 15, 22, 30, 5, 7, 9, 5, 4, 2],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBarChart = () => {
  return (
    <div
      style={{
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 15,
      }}
    >
      <div className="header">
        <h5 className="title">Anual balance</h5>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GroupedBarChart;
