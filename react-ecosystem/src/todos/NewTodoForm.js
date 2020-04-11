import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getTodos } from './selectors';
import { addTodoRequest } from './thunks';
// import { createTodo } from './actions';

// import './NewTodoForm.css';

// Styled Components using tagged fns
const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const NewTodoForm = ({ todos, onCreatePressed }) => { // todos is now automatically made available by connect as prop for the component to use. as it is added to mapStateToProps below
    const [inputValue, setInputValue] = useState('');

    return (
        <FormContainer>
        {/* <div className="new-todo-form"> */}
            <NewTodoInput
            // <input 
                // className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
            <NewTodoButton
            // <button
                onClick={()=>{
                    const isDuplicateText = todos.some(todo => todo.text === inputValue); // check if todos in state already have a duplicate
                    if(!isDuplicateText) {
                        onCreatePressed(inputValue); // Passing input value to createTodo action type
                        setInputValue(''); // Clear input value for next use
                    }
                }}
                // className="new-todo-button"
            >
                Create Todo
            {/* </button> */}
            </NewTodoButton>
        {/* </div> */}
        </FormContainer>
    );
};

const mapStateToProps = (state) => ({
    // todos: state.todos, // todos is now automatically made available by connect as prop for the component to use.
    todos: getTodos(state),
}); // Fn: takes the entire state of our app as input and return specific props from the state which this NewTodoForm component requires

const mapDispatchToProps = dispatch => ({
    // onCreatePressed: text => dispatch(createTodo(text)), // onCreatePressed is the fn our component will use to call createTodo action
    onCreatePressed: text => dispatch(addTodoRequest(text)), 
}); // Fn to map Dispatch to props

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
// export default NewTodoForm;
