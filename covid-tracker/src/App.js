import React from 'react';
import styled from 'styled-components';

import SearchCountryForm from './countries/SearchCountryForm';
import CountriesList from './countries/CountriesList';

// import './App.css';

const AppWrap = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const AppTitle = styled.h1`
  text-align: center;
`;

// import { sampleCountries } from './countries/sample-countries';

function App() {
  return (
    <AppWrap>
      <AppTitle>COVID-19 Tracker</AppTitle>
      <SearchCountryForm/>
      {/* <CountriesList countries = {sampleCountries} /> */}
      <CountriesList/>
    </AppWrap>
  );
}

export default App;
