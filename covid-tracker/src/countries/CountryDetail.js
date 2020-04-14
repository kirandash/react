import React from 'react';

import './CountryDetail.css';

const CountryDetail = ({ country, onRemovePressed, onPin }) => {
    return (
        <div className="country-wrapper">
            <h3>{country.info.title}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Total Cases</th>
                        <th>Total Recovered</th>
                        <th>Total Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{country.total_cases}</td>
                        <td>{country.total_recovered}</td>
                        <td>{country.total_deaths}</td>
                    </tr>
                </tbody>
            </table>
            <div className="buttons-wrapper">
                {!country.isPinned && <button 
                    onClick={() => onPin(country.info.code)}
                    className="pin-button">
                        Pin Country
                </button>}
                <button 
                    onClick={() => onRemovePressed(country.info.code)}
                    className="remove-button">
                        Remove
                </button>
            </div>
        </div>
    );
};

export default CountryDetail;