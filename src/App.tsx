import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<CardList />}/>
        <Route path="/:name" element={<Pokemon />}/>
      </Routes>
    </div>
  );
}

export default App;
