import React from 'react';
import { connect } from 'react-redux';

import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed }) => ( // Or use todos = [ {text: 'Test Todo item'} ] if a specific default todo item is required
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, index) => <TodoListItem todo={todo} key={index} onRemovePressed={onRemovePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;