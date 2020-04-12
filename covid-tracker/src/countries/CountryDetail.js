import React from 'react';

import './CountryDetail.css';

const CountryDetail = ({ country }) => {
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
                <button className="pin-button">Pin Country</button>
                <button className="remove-button">Remove</button>
            </div>
        </div>
    );
};

export default CountryDetail;