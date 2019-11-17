import React from 'react';
import './App.scss';
import Header from './landing-page/header/Header';
import MainContent from './landing-page/main-content/MainContent';

function App() {
  return (
    <div className="app">
      <MainContent />
      <Header />
    </div>
  );
}

export default App;
