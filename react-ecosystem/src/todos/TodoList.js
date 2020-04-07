import React from 'react'

import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos = [ {text: 'Test Todo item'} ] }) => ( // Or use todos = [] if not default todo item required
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, index) => <TodoListItem todo={todo} key={index} />)}
    </div>
)

export default TodoList