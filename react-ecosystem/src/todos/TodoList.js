import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { 
    // getTodos, 
    getTodosLoading, 
    getCompletedTodos, 
    getIncompleteTodos 
} from './selectors';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
// import { makrTodoAsCompleted } from './actions';
// import { displayAlert } from './thunks';

import './TodoList.css';

// Styled Components using tagged fns
const BigRedText = styled.div`
    font-size: 48px;
    color: #FF0000;
`; // Tagged fns are used to define styled-components

const TodoList = ({ completedTodos = [], incompleteTodos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => { // Or use todos = [ {text: 'Test Todo item'} ] if a specific default todo item is required
    useEffect(() => {
        startLoadingTodos();
    }, []); // The empty array is to prevent reloading the app constantly
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <BigRedText>I'm a styled component</BigRedText>
            <NewTodoForm />
            {/* 
            {todos.map((todo, index) => 
                <TodoListItem 
                    todo={todo} key={index} onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                    // onCompletedPressed={onDisplayAlertClicked}
                />
            )} */}
            <h3>Incomplete: </h3>
            {incompleteTodos.map((todo, index) => 
                <TodoListItem 
                    todo={todo} key={index} onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                />
            )}
            <h3>Complete:</h3>
            {completedTodos.map((todo, index) => 
                <TodoListItem 
                    todo={todo} key={index} onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                />
            )}
        </div>        
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    // isLoading: state.isLoading,
    isLoading: getTodosLoading(state),
    // todos: state.todos,
    // todos: getTodos(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    // onRemovePressed: text => dispatch(removeTodo(text)),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    // onCompletedPressed: text => dispatch(makrTodoAsCompleted(text)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    // onDisplayAlertClicked: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;