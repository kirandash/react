import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadTodos } from '../thunks';

describe('The loadTodos Thunk', () => {
    // Test 3 things: dispatch loadTodosInProgress, fetch todos api call, dispatch loadTodosSuccess
    it('Dispatches the correct actions in the success scenario', async () => {
        const fakeDispatch = sinon.spy(); // creates a fake fn to keep track of which args it was called with. since in loadTodos, dispatch fn is called multiple times

        const fakeTodos = [{ text: '1' }, { text: '2' }]; // todos to be returned from fake api fetch
        fetchMock.get('http://localhost:8080/todos', fakeTodos); // This changes the behavior of fetch - must reset next

        const expectedFirstAction = {type: 'LOAD_TODOS_IN_PROGRESS'}; // for testing loadTodosInProgress
        const expectedSecondAction = {
            type: 'LOAD_TODOS_SUCCESS',
            payload: {
                todos: fakeTodos,
            }
        }; // for testing loadTodosSuccess

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction); // for fake dispatch's first call, first arg should match with expected first action ie LOAD_TODOS_IN_PROGRESS
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction); // for fake dispatch's - second call, first arg should match with expected second action ie LOAD_TODOS_SUCCESS

        fetchMock.reset(); // reseting fetchMock
    });
});