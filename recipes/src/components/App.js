import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; // Browser router uses HTML5 history API
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import NotFound from './NotFound';
import Recipe from './Recipe';

// const App = () => (
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`) // template string
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  toggleFavorite = id => {
    // console.log(id);
    this.setState(({ favorites, ...state }) => {
      // Destructuring to get the favorites and the rest of the state from state
      const idx = favorites.indexOf(id);
      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f !== id) };
      }
      return { ...state, favorites: [...favorites, id] };
    }); // Recommended to use a fn instead of JSON object since can get return data and pass more values
  };

  render (){
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            {/*<Route exact path="/" component={Home} /> Replacing component with render to pass state and fns as props */}
            <Route 
              exact 
              path="/" 
              render={() => (
                <Home state={this.state} toggleFavorite={this.toggleFavorite} />
              )}
            />
            {/*<Route exact path="/favorites" component={Favorites} />*/}
            <Route 
              exact 
              path="/favorites"
              render={() => (
                <Favorites state={this.state} toggleFavorite={this.toggleFavorite} />
              )}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
// );
    );
  }
}

export default App;
