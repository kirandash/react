import React from 'react';
import './SearchCountryForm.css';

const SearchCountryForm = () => {
    return (
        <div className="search-country-form">
            <input 
                className="search-country-input" 
                placeholder="Type country code and submit to start tracking" />
            <button className="search-country-button">Submit</button>
        </div>
    )
}
export default SearchCountryForm;