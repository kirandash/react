import React from 'react';
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types';

class Recipe extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            recipe: null
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params; // match props has all the info related to URL visited by user in react application
        fetch(`${API_URL}/v1/recipes/${id}`) // template string
        .then(res => res.json())
        .then(recipe => {
            this.setState({ recipe });
        });
    }

    render(){
        const { recipe } = this.state;
        return (
            <div className="px4">
                <RecipeDetail recipe={recipe} />
            </div>
        )
    }
}

Recipe.propTypes = {
    match: PropTypes.object
}

export default Recipe;