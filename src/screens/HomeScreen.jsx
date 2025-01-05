import React from 'react';
import MainComponent from '../components/MainComponent';
import DetailComponent from '../components/DetailComponent';

const showMain = false;

const HomeScreen = () => {
  if (showMain) {
    return (
        <MainComponent />
    );
  }

  return (
    <div>
      <DetailComponent />
    </div>
  );
};

export default HomeScreen;
