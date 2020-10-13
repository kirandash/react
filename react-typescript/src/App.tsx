import React from 'react';

import Message from './Message';
import ClassMessage from './ClassMessage';
import logo from './logo.svg';
import './App.css';

// // define Initial state
// const initialState = {
//   name: 'Kiran Dash',
//   message: 'TS is cool'
// }

// // define State Type - Be careful as type of state might change if different data types might come in state variables
// type State = Readonly<typeof initialState>;

// class App extends React.Component<any, State> {
//   // define the state
//   readonly state: State = initialState;

class App extends React.Component {

  render() {
    // Basic Types
    let firstValue: string = 'Manny';
    // let secondValue: number = 'Manny';
    let secondValue: number = 34;
    let thirdValue: boolean = true;
    let fourthValue: number[] = [2, 3, 56];
    let fifthValue: Array<string> = ['kiran', 'hero'];

    // Complex Types
    // Tuple
    // const aTuple: [string, number] = ['Manny', 34]; // eslint error
    // enum
    enum Codes { first = 1, Second = 2 };
    // any - avoid as much as possible
    let firstName: any = 'Manny';
    // void - when no return statements - return type should be void
    const warning = (): void => {
      console.log('Warning!')
    }

    warning();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The value {firstValue} is of {typeof firstValue} type! <br />
            The value {secondValue} is of {typeof secondValue} type! <br />
            The value {thirdValue} is of {typeof thirdValue} type! <br />
            The value {fourthValue} is of {typeof fourthValue} type! <br />
            The value {fifthValue} is of {typeof fifthValue} type! <br />
            {/* The value {aTuple[0]} is of {typeof aTuple[0]} type! <br/>
            The value {aTuple[1]} is of {typeof aTuple[1]} type! <br/> */}
            The value {Codes.first} is of {typeof Codes.first} type! <br />
            The value {firstName} is of {typeof firstName} type! <br />
          </p>
          {/* <Message name={this.state.name} message={this.state.message} /> */}
          <Message />
          <ClassMessage />
        </header>
      </div>
    );
  }
}

export default App;
