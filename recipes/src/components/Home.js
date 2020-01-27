import React from 'react';
// import Logo from './static/images/logo.png';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types';

// Class React Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // recipes: [],
      // favorites: [],
      currentRecipe: null,
    };
    // Explicitly bind the function to constructor so that the fn is in the scope of the class, because the fn is not in the scope of the class by default
    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  // componentDidMount() {
  //   fetch(`${API_URL}/v1/recipes`) // template string
  //     .then(res => res.json())
  //     .then(recipes => {
  //       this.setState({ recipes });
  //     });
  // }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`) // template string
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  // toggleFavorite = id => {
  //   // console.log(id);
  //   this.setState(({ favorites, ...state }) => {
  //     // Destructuring to get the favorites and the rest of the state from state
  //     const idx = favorites.indexOf(id);
  //     if (idx !== -1) {
  //       return { ...state, favorites: favorites.filter(f => f.id !== id) };
  //     }
  //     return { ...state, favorites: [...favorites, id] };
  //   }); // Recommended to use a fn instead of JSON object since can get return data and pass more values
  // };

  render() {
    const { recipes, favorites } = this.props.state; // state is being sent as props
    const { currentRecipe } = this.state;
    // const { recipes, favorites, currentRecipe } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              onClick={this.onRecipeClick}
              onFavorited={this.props.toggleFavorite}
              favorites={favorites}
            />
          </div>
          <RecipeDetail
            style={{ flex: 5 }}
            recipe={currentRecipe}
            className="ml4"
          />
        </main>
      </div>
    );
  }
}
// console.log(Logo); // Logo variable has the image content. File loader converts it and returns the path that can be used in react component
// Functional React Component
/* const Home = () => (
    <div>
        <Header/>
        <main style={{ display: 'flex' }}>
            <RecipeList style={{ flex: 3 }}/>
            <RecipeDetail style={{ flex: 5 }}/>
        </main>
    </div>
); */

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func
}

export default Home;
