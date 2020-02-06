import React from 'react';
import './App.css';
import News from './News/News';
import SideNews from './News/SideNews';

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
      <div className="container-fluid">
        {/*<header className="App-header">
          <h1 className="App-title">
            My Feed
          </h1>
        </header>*/}
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="#" className="bran-logo center">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1}></News>
            <News news={this.state.news2}></News>   
          </div>
          <div className="col s4">
            <SideNews/>
          </div>
        </div>     
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
