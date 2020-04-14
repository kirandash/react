import React from 'react';
import { connect } from 'react-redux';

import CountryDetail from './CountryDetail';
import { removeCountry } from './actions';

import './CountriesList.css';

const CountriesList = ({ countries = [], onRemovePressed }) => { // countries and onRemovePressed are available from mapStateToProps and mapDispatchToProps
    return (
        <div className="countries-list-wrapper">
            {countries.map((country, index) => {
                return <CountryDetail country={country} key={index} onRemovePressed={onRemovePressed} />
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    countries: state.countries,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: countryCode => dispatch(removeCountry(countryCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
// export default CountriesList;