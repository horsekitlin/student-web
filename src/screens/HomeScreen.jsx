import React from 'react';
import MainComponent from '../components/MainComponent';
import DetailComponent from '../components/DetailComponent';

const showMain = false;

const HomeScreen = () => {
  if (showMain) {
    return (
      <div>
        <MainComponent />
      </div>
    );
  }

  return (
    <div>
      <DetailComponent />
    </div>
  );
};

export default HomeScreen;
