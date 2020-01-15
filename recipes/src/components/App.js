import React from 'react';
// import Logo from './static/images/logo.png';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';


// Class React Component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            currentRecipe: null
        };
        // Explicitly bind the function to constructor so that the fn is in the scope of the class, because the fn is not in the scope of the class by default
        this.onRecipeClick = this.onRecipeClick.bind(this);
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`) // template string
            .then(res => res.json())
            .then(recipes => {
                this.setState({ recipes });
            });
    }

    onRecipeClick = (id) => {
        fetch(`${API_URL}/v1/recipes/${id}`) // template string
            .then(res => res.json())
            .then(recipe => {
                this.setState({ currentRecipe: recipe });
            });
    }

    render() {
        const { recipes, currentRecipe } = this.state;
        return (
            <div>
                <Header/>
                <main style={{ display: 'flex' }}>
                    <RecipeList style={{ flex: 3 }} recipes={recipes} onClick={this.onRecipeClick}/>
                    <RecipeDetail style={{ flex: 5 }} recipe={currentRecipe}/>
                </main>
            </div>
        );
    }
}
// console.log(Logo); // Logo variable has the image content. File loader converts it and returns the path that can be used in react component
// Functional React Component
/* const App = () => (
    <div>
        <Header/>
        <main style={{ display: 'flex' }}>
            <RecipeList style={{ flex: 3 }}/>
            <RecipeDetail style={{ flex: 5 }}/>
        </main>
    </div>
); */

export default App;