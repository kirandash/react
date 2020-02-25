import storeFactory from './store';
import { addDay, removeDay, setGoal } from './actions'; // action creator, is basically a function that returns an object that can be passed to the dispatch fn

const store = storeFactory();

store.dispatch(
    addDay("Heavenly", "2020-11-11")
)

store.dispatch(
    removeDay("2020-11-11")
)

store.dispatch(
    setGoal(55)
)