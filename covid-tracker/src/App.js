import React from 'react';

import SearchCountryForm from './countries/SearchCountryForm';
import CountriesList from './countries/CountriesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">COVID-19 Tracker</h1>
      <SearchCountryForm/>
      <CountriesList />
    </div>
  );
}

export default App;
