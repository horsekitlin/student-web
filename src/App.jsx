import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomeScreen from './screens/HomeScreen';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <HomeScreen />
      </AppContainer>
    </Provider>
  );
};

export default App;