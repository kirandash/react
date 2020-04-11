import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';
// import { createTodo } from './actions';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => { // todos is now automatically made available by connect as prop for the component to use. as it is added to mapStateToProps below
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
            <button
                onClick={()=>{
                    const isDuplicateText = todos.some(todo => todo.text === inputValue); // check if todos in state already have a duplicate
                    if(!isDuplicateText) {
                        onCreatePressed(inputValue); // Passing input value to createTodo action type
                        setInputValue(''); // Clear input value for next use
                    }
                }}
                className="new-todo-button">
                Create Todo
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos, // todos is now automatically made available by connect as prop for the component to use.
}); // Fn: takes the entire state of our app as input and return specific props from the state which this NewTodoForm component requires

const mapDispatchToProps = dispatch => ({
    // onCreatePressed: text => dispatch(createTodo(text)), // onCreatePressed is the fn our component will use to call createTodo action
    onCreatePressed: text => dispatch(addTodoRequest(text)), 
}); // Fn to map Dispatch to props

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
// export default NewTodoForm;
