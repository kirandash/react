import React from 'react';
import styled from 'styled-components';

// import './TodoListItem.css';

// Styled Components using tagged fns
export const getBorderStyleForDate = (startingDate, currentDate) => 
    (startingDate > new Date(currentDate - 86400000 * 5) ? 'none': '2px solid red'); // separating logics out of styled components, makes the code more readable and most importantly the logics can be tested easily.
// 8640000 = no of milliseconds in a daye

const ToDoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    border-bottom: ${props => getBorderStyleForDate(new Date(props.createdAt), Date.now())};
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

// const ToDoItemContainer = styled.div`
//     background: #fff;
//     border-radius: 8px;
//     border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 86400000 * 5) ? 'none' : '2px solid red')};
//     margin-top: 8px;
//     padding: 16px;
//     position: relative;
//     box-shadow: 0 4px 8px grey;
// `;

// Extending ToDOItemContainer 
const ToDoItemContainerWithWarning = styled(ToDoItemContainer)`
    border-top: 2px solid red;
`; // Will take all styles from ToDoItemContainer and add border-top on top of that

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

// Extending Button 
const CompletedButton = styled(Button)`
    background-color: #22ee22;
`; // button + .completed-button style

// Extending Button
const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`; // button + .remove-button style

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? ToDoItemContainer : ToDoItemContainerWithWarning;
    return (
    <Container createdAt={todo.createdAt}>
    {/* <ToDoItemContainer createdAt={todo.createdAt} completed={todo.isCompleted}> */}
    {/* <div className="todo-item-container"> */}
        <h3>{todo.text}</h3>
        <p>
            Created at:&nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
        </p>
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
    {/* </ToDoItemContainer> */}
    </Container>
)};

export default TodoListItem;