import React from 'react';

import ReactEcharts from 'echarts-for-react';
import { EChartOption } from 'echarts';

import { Container } from './styles';

const Echarts: React.FC = () => {
  const lineOptions: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Teste', 'teste2', 'teste3']
    },
    yAxis: {
      type: 'value'
    },
    series: [{ 
      data: [820, 932, 901],
      type: 'line'
    }],
    tooltip: { trigger: 'item', backgroundColor: "#555", borderWidth: 0, padding: 10 },
  }

  const pieOptions: EChartOption = {
    title: {
      text: 'Tipos de ocorrência',
      left: 'center'
    },
    series: [{ 
      data: [{name: 'Ticket de produto', value: 820}, {name: 'Chamados', value: 901}, {name: 'Ticket de implementação', value: 932}],
      type: 'pie',
    }],
    legend: {
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
    },
    tooltip: { trigger: 'item', backgroundColor: "#555", borderWidth: 0, padding: 10, formatter: '{c} ({d}%)' },
  }

  const barOptions: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Junho', 'Julho', 'Agosto']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150],
      type: 'bar'
    }],
    legend: {
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
    },
    tooltip: { trigger: 'item', backgroundColor: "#555", borderWidth: 0, padding: 10 },
  }
  
  return (
    <Container>
      <h1>Line</h1>
      <div>
        <ReactEcharts option={lineOptions} />
      </div>

      <h1>Pie</h1>
      <div>
        <ReactEcharts option={pieOptions} />
      </div>
      
      <h1>Bar</h1>
      <div>
        <ReactEcharts option={barOptions} />
      </div>
    </Container>
  );
}

export default Echarts;