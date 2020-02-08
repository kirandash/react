import C from './constants';
import { allSkiDays, goal } from './initialState.json';

console.log(`
    Sik Day Counter
    ===============
    The goal is ${goal}.
    Initially there are ${allSkiDays.length} ski days in state.

    Constants (actions)
    ---------
    ${Object.keys(C).join('\n    ')}
`);