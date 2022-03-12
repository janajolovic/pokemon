import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <CardList />
    </div>
  );
}

export default App;
