import React from 'react';

import CountryDetail from './CountryDetail';

import './CountriesList.css';

const CountriesList = ({ countries = [] }) => {
    return (
        <div className="countries-list-wrapper">
            {countries.map((country, index) => {
                return <CountryDetail country={country} key={index} />
            })}
        </div>
    );
};

export default CountriesList;