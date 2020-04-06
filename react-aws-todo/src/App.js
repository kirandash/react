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

function updateToDo(todo, newdesc) {
  todo['description'] = newdesc
  API.graphql(graphqlOperation(mutations.updateTodo, {input: todo}))
}

function deleteToDo(todo) {
  API.graphql(graphqlOperation(mutations.deleteTodo, {input: {'id': todo['id']}}))
}

function App() {
  // Create To Do
  Auth.currentAuthenticatedUser({
    bypassCache: false
  }).then(function(user){
    console.log("User: " + JSON.stringify(user));
    const todo = {name: user['username'], description: "new todo"};
    const newTodo = API.graphql(graphqlOperation(mutations.createTodo, {input: todo}));
    console.log(newTodo)
  }).catch(err => {
    console.log(err)
  })

  // Get Queries
  const allToDos = API.graphql(graphqlOperation(queries.listTodos));
  console.log(allToDos);

  const oneToDo = API.graphql(graphqlOperation(queries.getTodo, {id: "f411ad05-5f60-4bab-b10f-223f0dc753b6"})).then(function(todo){
    updateToDo(todo['data']['getTodo'], "new desc");
    // deleteToDo(todo['data']['getTodo']);
  });
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
