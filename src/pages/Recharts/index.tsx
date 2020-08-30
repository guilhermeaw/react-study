import React from 'react';

import { BarChart, Bar, Legend, Tooltip, XAxis, YAxis, PieChart, Pie } from 'recharts';

import { Container } from './styles';

const Recharts: React.FC = () => {
  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    }
  ];

  const pieData = [
    {
      name: "Group A",
      value: 400
    },
    {
      name: "Group B",
      value: 300
    },
    {
      name: "Group C",
      value: 300
    }
  ];

  return (
    <Container>
      <h1>Pie</h1>
      <div>
        <PieChart width={730} height={400}>
          <Tooltip />
          <Legend />
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
        </PieChart>
      </div>

      <h1>Bar</h1>
      <div>
        <BarChart width={730} height={400} data={data}>
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    </Container>
  );
}

export default Recharts;