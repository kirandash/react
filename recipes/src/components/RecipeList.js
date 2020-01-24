import React from 'react';
import PropTypes from 'prop-types';

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

const RecipeList = props => (
  <div style={props.style}>
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {props.recipes.map(recipe => (
        <li
          key={recipe.id}
          onClick={() => props.onClick(recipe.id)}
          className="py2 border-bottom border-bottom-dashed pointer"
        >
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.Object,
  style: PropTypes.Object,
};

export default RecipeList;
