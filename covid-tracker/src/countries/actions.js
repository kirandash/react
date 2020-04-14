// CREATE_COUNTRY Action
export const CREATE_COUNTRY = 'CREATE_COUNTRY'; // Action Type
export const createCountry = countryCode => ({
    type: CREATE_COUNTRY,
    payload: { countryCode }
}); // Action Creator

// REMOVE_COUNTRY Action
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'; // Action Type
export const removeCountry = countryCode => ({
    type: REMOVE_COUNTRY,
    payload: { countryCode }
}); // Action Creator

// PIN_COUNTRY Action
export const PIN_COUNTRY = 'PIN_COUNTRY'; // Action Type
export const pinCountry = countryCode => ({
    type: PIN_COUNTRY,
    payload: { countryCode }
}); // Action Creator