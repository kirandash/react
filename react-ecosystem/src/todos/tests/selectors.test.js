import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }, {
            text: 'Say Goodbye',
            isCompleted: false
        }, {
            text: 'Climb Mt Everest',
            isCompleted: false
        }]; // fake todos with both completed and incompleted data

        const expected = [{
            text: 'Say Hello',
            isCompleted: true,
        }];

        const actual = getCompletedTodos.resultFunc(fakeTodos); // resultFunc is the final fn in getCompletedTodos in selectors.js file (todos) => todos.filter(todo => todo.isCompleted)

        expect(actual).to.deep.equal(expected);
    });
});