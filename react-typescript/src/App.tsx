import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let firstValue: string = 'Manny';
  // let secondValue: number = 'Manny';
  let secondValue: number = 34;
  let thirdValue: boolean = true;
  let fourthValue: number[] = [2,3,56];
  let fifthValue: Array<string> = ['kiran', 'hero'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type! <br/>
          The value {secondValue} is of {typeof secondValue} type! <br/>
          The value {thirdValue} is of {typeof thirdValue} type! <br/>
          The value {fourthValue} is of {typeof fourthValue} type! <br/>
          The value {fifthValue} is of {typeof fifthValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
