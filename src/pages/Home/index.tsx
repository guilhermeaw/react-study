import React from 'react';

import { Container } from './styles';
import Accordion from '../../components/Accordion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container>
      <Accordion title="Ocorrências">
        <div>
          <Link to="/graficos">
            Gráficos
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
        <div style={{ marginTop: '8px' }}>
          <Link to="/teste">
            Lazy Loading
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
        <div style={{ marginTop: '8px' }}>
          <Link to="/teste">
            FEATURE: teste
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
      </Accordion>
      <Accordion title="Gráficos">
        <div>
          <Link to="/echarts">
            e-charts
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
        <div style={{ marginTop: '8px' }}>
          <Link to="/chartjs">
            chartJS
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
        <div style={{ marginTop: '8px' }}>
          <Link to="/recharts">
            recharts
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
      </Accordion>
      <Accordion title="Documentos">
        <div>
          <Link to="/teste">
            FEATURE: teste
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
        <div style={{ marginTop: '8px' }}>
          <Link to="/teste">
            FEATURE: teste
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
        <div style={{ marginTop: '8px' }}>
          <Link to="/teste">
            FEATURE: teste
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
      </Accordion>
      <Accordion title="Projetos">
        <div>
          <Link to="/teste">
            FEATURE: teste
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
        <div style={{ marginTop: '8px' }}>
          <Link to="/teste">
            FEATURE: teste
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
        <div style={{ marginTop: '8px' }}>
          <Link to="/teste">
            FEATURE: teste
          </Link>
          <p>Descrição do teste bem grande pra testar</p>
        </div>
        
      </Accordion>
    </Container>
  );
}

export default Home;