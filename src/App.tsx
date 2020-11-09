import React, { SFC } from 'react';
import styled from 'react-emotion';
import 'semantic-ui-css/semantic.min.css'
import Dashbaord from './features/Posts/Dashbaord';

const AppContainer = styled(`div`)({
  textAlign: 'center',
});

const AppHeader = styled(`header`)({
  backgroundColor: '#222',
  padding: '1rem',
  marginBottom: '0.5em',
  color: 'white',
});

const App: SFC = () => (
  <AppContainer>
    <AppHeader>
      <h1>COVID-19 Tracker</h1>
    </AppHeader>
    <Dashbaord />
  </AppContainer>
);

export default App;
