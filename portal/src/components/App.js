import React from 'react';
import './App.css';
import News from './News/News';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'country=in&category=business'
      },
      news2: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            My Feed
          </h1>
        </header>
        <News news={this.state.news1}></News>
        <News news={this.state.news2}></News>        
      </div>
    )
  }
}

/*function App() {
  return (
    <div className="App">
      <h1>React Portal</h1>
      <News />
    </div>
  );
}*/

export default App;
