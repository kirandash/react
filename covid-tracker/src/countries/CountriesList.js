import React from 'react';
import CountryItem from './CountryItem';

const CountriesList = ({ countries }) => {
    return (
        <div className="countries-list-wrapper">
            {countries.map(country => {
                <CountryItem country={country} />
            })}
        </div>
    );
};

export default CountriesList;