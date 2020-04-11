import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
// import { makrTodoAsCompleted } from './actions';
// import { displayAlert } from './thunks';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => { // Or use todos = [ {text: 'Test Todo item'} ] if a specific default todo item is required
    useEffect(() => {
        startLoadingTodos();
    }, []); // The empty array is to prevent reloading the app constantly
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map((todo, index) => 
                <TodoListItem 
                    todo={todo} key={index} onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                    // onCompletedPressed={onDisplayAlertClicked}
                />)}
        </div>        
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
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