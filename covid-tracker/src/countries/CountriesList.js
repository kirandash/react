import React from 'react';

import CountryDetail from './CountryDetail';

import './CountriesList.css';

const CountriesList = ({ countries = [] }) => {
    return (
        <div className="countries-list-wrapper">
            {countries.map(country => {
                return <CountryDetail country={country} />
            })}
        </div>
    );
};

export default CountriesList;