import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeDetail = props => {
  if (!props.recipe) {
    return (
      <p
        style={props.style}
        className={classNames('h3 p2 bg-white italic center', props.className)}
      >
        Please select a recipe to see the detail!
      </p>
    );
  }
  return (
    <div
      style={props.style}
      className={classNames('p2 bg-white', props.className)}
    >
      <h2 className="h2">{props.recipe.name}</h2>
      <img src={props.recipe.image} className="fit" alt={props.recipe.name} />
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
      </div>
      <h3>Ingredients:</h3>
      {props.recipe.ingredients && 
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>}
      <h3>Steps:</h3>
      {props.recipe.steps && <ol>
        {props.recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>}
      <Link
        to={`/recipe/${props.recipe.id}`}
      >
        See more
      </Link>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.Object,
  className: PropTypes.string,
  style: PropTypes.Object,
};

export default RecipeDetail;
