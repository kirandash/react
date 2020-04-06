import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
Auth.configure(awsconfig);
API.configure(awsconfig);

function App() {
  // Create To Do
  const todo = {name: "App", description: "new todo"};
  const newTodo = API.graphql(graphqlOperation(mutations.createTodo, {input: todo}));
  console.log(newTodo)

  // Get Queries
  const allToDos = API.graphql(graphqlOperation(queries.listTodos));
  console.log(allToDos);

  const oneToDo = API.graphql(graphqlOperation(queries.getTodo, {id: "faccd00a-3357-4ee8-91ce-076b70f10c7c"}));
  console.log(oneToDo);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React AWS ToDo App
        </p>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {includeGreetings: true});
// export default App;
