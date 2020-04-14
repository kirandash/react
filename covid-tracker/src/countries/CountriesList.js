import React from 'react';
import { connect } from 'react-redux';

import CountryDetail from './CountryDetail';
import { removeCountry, pinCountry } from './actions';
// import { showAlert } from './thunks';

import './CountriesList.css';

const CountriesList = ({ countries = [], onRemovePressed, 
                        onPin, 
                        // onPinClicked 
                      }) => { // countries and onRemovePressed are available from mapStateToProps and mapDispatchToProps
    return (
        <div className="countries-list-wrapper">
            {countries.map((country, index) => {
                return <CountryDetail 
                            country={country} 
                            key={index} 
                            onRemovePressed={onRemovePressed} 
                            // onPin={onPinClicked} 
                            onPin={onPin} 
                            />
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    countries: state.countries,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: countryCode => dispatch(removeCountry(countryCode)),
    onPin: countryCode => dispatch(pinCountry(countryCode)),
    // onPinClicked: text => dispatch(showAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
// export default CountriesList;