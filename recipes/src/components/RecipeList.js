import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

// const RecipeList = (props) => (
//     <div style={props.style}>
//         <h2>Recipes</h2>
//         <ul>
//             {props.recipes.map(recipe => {
//                 <li key={recipe.id}>
//                     <span>{recipe.name}</span>
//                     <span>{recipe.category}</span>
//                 </li>
//             })}
//         </ul>
//     </div>
// );

const RecipeList = ({ style, favorites, recipes, ...props }) => (
  <div style={style}>
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
          recipe = {recipe}
          favorited={favorites.includes(recipe.id)}
          {...props}
          key = {recipe.id}
        />
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.Object,
  favorites: PropTypes.Object,
  style: PropTypes.Object,
};

export default RecipeList;
