import React from 'react';
import './App.css';
import { Country } from './components/Country/Country';
import { Filter } from './components/Filter/Filter';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Filter></Filter>
    <Country></Country>
      
    </div>
  );
}

export default App;
