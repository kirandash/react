import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import * as queries from './graphql/queries';
Auth.configure(awsconfig);
API.configure(awsconfig);

function App() {
  // Get Queries
  const allToDos = API.graphql(graphqlOperation(queries.listTodos));
  console.log(allToDos);

  const oneToDo = API.graphql(graphqlOperation(queries.getTodo, {id: "788u7898-876868s88-c88788"}));
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
