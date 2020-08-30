import React from 'react';
import { Doughnut, Pie, Bar } from 'react-chartjs-2'
import { ChartData, ChartOptions } from 'chart.js';

import { Container } from './styles';

const ChartJS: React.FC = () => {
  const data: ChartData = {
    labels: [
      'Ticket de produto',
      'Chamados',
      'Ticket de implementação'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#ff9000'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#ff9000'
      ],
    }]
  };

  const barData: ChartData = {
    labels: ['Ticket de produto', 'Chamados', 'Ticket de implementação'],
    datasets: [
      {
        label: 'Tipos de ocorrência',
        backgroundColor: 'rgb(255,99,132)',
        borderColor: 'rgb(255,99,132)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(255,75,132)',
        hoverBorderColor: 'rgb(255,75,132)',
        data: [65, 59, 80]
      },
    ]
  }

  const options: ChartOptions = {
    title: { fontSize: 32, display: true, text: 'Tipos de ocorrência' }
  }
  
  return (
    <Container>
        <h1>Doughnut</h1>
      <div>
        <Doughnut data={data} options={options} />
      </div>

        <h1>Pie</h1>
      <div>
        <Pie data={data} options={options} />
      </div>

        <h1>Bar</h1>
      <div>
        <Bar data={barData} options={options} />
      </div>
    </Container>
  );
}

export default ChartJS;