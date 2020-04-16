import React from 'react';
import { connect } from 'react-redux';

import CountryDetail from './CountryDetail';
import { removeCountry, pinCountry } from './actions';
// import { showAlert } from './thunks';
import { 
    // getCountries, 
    getIsLoading, getPinnedCountries, getNotPinnedCountries } from './selectors';

import './CountriesList.css';

const CountriesList = ({ // countries = [], 
                        onRemovePressed, 
                        onPin, 
                        // onPinClicked 
                        isLoading,
                        pinnedCountries = [],
                        notPinnedCountries = []
                      }) => { // countries and onRemovePressed are available from mapStateToProps and mapDispatchToProps
    const loadingMessage = (<div className='loader'>Loading Country...</div>);
    const content = (
        <div className="countries-list-wrapper">
            {/* {countries.map((country, index) => {
                return <CountryDetail 
                            country={country} 
                            key={index} 
                            onRemovePressed={onRemovePressed} 
                            // onPin={onPinClicked} 
                            onPin={onPin} 
                            />
            })} */}
            {pinnedCountries.length > 0 && <h3>Pinned Countries</h3>}
            {pinnedCountries.map((country, index) => {
                return <CountryDetail 
                            country={country} 
                            key={index} 
                            onRemovePressed={onRemovePressed} 
                            // onPin={onPinClicked} 
                            onPin={onPin} 
                            />
            })}
            {notPinnedCountries.length > 0 && <h3>Not Pinned Countries</h3>}
            {notPinnedCountries.map((country, index) => {
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
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    // isLoading: state.isLoading,
    isLoading: getIsLoading(state),
    // countries: state.countries,
    // countries: getCountries(state),
    pinnedCountries: getPinnedCountries(state),
    notPinnedCountries: getNotPinnedCountries(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: countryCode => dispatch(removeCountry(countryCode)),
    onPin: countryCode => dispatch(pinCountry(countryCode)),
    // onPinClicked: text => dispatch(showAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
// export default CountriesList;