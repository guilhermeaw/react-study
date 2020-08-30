import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Echarts from '../pages/Echarts';
import ChartJS from '../pages/ChartJS';
import Recharts from '../pages/Recharts';

const Routes: React.FC = () => {
  return <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/echarts" component={Echarts} />
    <Route path="/chartjs" component={ChartJS} />
    <Route path="/recharts" component={Recharts} />
  </Switch>;
}

export default Routes;