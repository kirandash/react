import storeFactory from './store';
import { randomGoals } from './actions';

const store = storeFactory();

store.dispatch(
    randomGoals()
)

store.dispatch(
    randomGoals() // This won't dispatch actions. As per logic in actions.js fetching becomes true thus it won't proceed further
)