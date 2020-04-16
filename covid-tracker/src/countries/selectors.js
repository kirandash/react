// Get Countries selector
export const getCountries = state => state.countries; // if structure of state changes, we don't have to change the mapping in mapStateToProps for every component. All we have to do is just change the code in selectors.js file here and the fns will handle everything else

// Get isLoading selector
export const getIsLoading = state => state.isLoading;