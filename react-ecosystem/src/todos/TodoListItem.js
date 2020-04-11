import React from 'react';
import styled from 'styled-components';

// import './TodoListItem.css';

// Styled Components using tagged fns
const ToDoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const CompletedButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #22ee22;
`; // button + .completed-button style

const RemoveButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;
`; // button + .remove-button style

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <ToDoItemContainer>
    {/* <div className="todo-item-container"> */}
        <h3>{todo.text}</h3>
        <ButtonsContainer>
        {/* <div className="buttons-container"> */}
            {todo.isCompleted 
                ? null 
                : 
                <CompletedButton
                // <button 
                    onClick={() => onCompletedPressed(todo.id)}
                    // className="completed-button"
                >
                    Mark as Completed
                {/* </button> */}
                </CompletedButton>}
            <RemoveButton
            // <button
                onClick={() => onRemovePressed(todo.id)}
                // className="remove-button"
            >
                Remove
            {/* </button> */}
            </RemoveButton>
        {/* </div> */}
        </ButtonsContainer>
    {/* </div> */}
    </ToDoItemContainer>
);

export default TodoListItem;