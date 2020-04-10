import React from 'react';
import { connect } from 'react-redux';

import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, makrTodoAsCompleted } from './actions';
import { displayAlert } from './thunks';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, onDisplayAlertClicked }) => ( // Or use todos = [ {text: 'Test Todo item'} ] if a specific default todo item is required
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, index) => 
            <TodoListItem 
                todo={todo} key={index} onRemovePressed={onRemovePressed}
                // onCompletedPressed={onCompletedPressed}
                onCompletedPressed={onDisplayAlertClicked} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(makrTodoAsCompleted(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;