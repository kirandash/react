import { CREATE_COUNTRY, REMOVE_COUNTRY } from './actions';

export const countries = (state = [], action) => { // Default state is mentioned as an empty array to avoid any error in case, the state passed is not having any data
    const { type, payload } = action; // Get Action Type and payload from the action (By destructuring)
    switch (type) {
        case CREATE_COUNTRY: { // Note: We could use 'CREATE_TODO' string but it is better to import the constants we created in actions.js file. Since there will be less chance of making a typo
            const { countryCode } = payload;
            const newCountry = {
                "info":{
                    "ourid":177,
                    "title":countryCode,
                    "code":countryCode,
                    "source":"https://thevirustracker.com/singapore-coronavirus-information-sg"
                },
                "total_cases":2299,
                "total_recovered":528,
                "total_unresolved":0,
                "total_deaths":8,
                "total_new_cases_today":0,
                "total_new_deaths_today":0,
                "total_active_cases":1763,
                "total_serious_cases":31,
                "total_danger_rank":50
            }; // Hard Coded Country details, later to be replaced by API response
            return state.concat(newCountry);
        }
        case REMOVE_COUNTRY: {
            const { countryCode } = payload;
            return state.filter(country => country.info.code !== countryCode); // Remove country with countrycode received in payload
        }
        default: {
            return state;
        } // Since this reducer is going to be common to our app. The Todos reducer will be called for other actions as well. So if the action is not defined in our switch case block, default block will return the state as is
    }
}