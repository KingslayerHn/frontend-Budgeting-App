import React from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import 'moment/locale/en-ca';
import { useSelector } from 'react-redux';

const GroupedBarChart = () => {
  const { expenses, incomes, transferences } = useSelector(
    (state) => state.stadistics.year
  );

  const data = {
    labels: moment.monthsShort(),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map((month) =>
          month.data.length === 0 ? 0 : month.data[0].expenses
        ),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Transferences In',
        data: transferences.in.map((month) =>
          month.data.length === 0 ? 0 : month.data[0].transferences
        ),
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Transferences Out',
        data: transferences.out.map((month) =>
          month.data.length === 0 ? 0 : month.data[0].transferences
        ),
        backgroundColor: '#4E6EF5',
      },
      {
        label: 'Incomes',
        data: incomes.map((month) =>
          month.data.length === 0 ? 0 : month.data[0].incomes
        ),
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

  if (
    expenses.length === 0 &&
    incomes.length === 0 &&
    transferences.in.length === 0 &&
    transferences.out.length === 0
  ) {
    return <h1>loading ...</h1>;
  }

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
