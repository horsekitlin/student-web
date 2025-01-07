import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { AppContainer } from './components/CustomStyledComponents';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/detail/:id" element={<DetailScreen />} />
          </Routes>
        </AppContainer>
      </Router>
    </Provider>
  );
};

export default App;