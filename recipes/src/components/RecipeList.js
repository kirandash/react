import React from 'react';

const RecipeList = (props) => (
    <div style={props.style}>
        <h2>Recipes</h2>
        <ul>
            <li>
                <span>Cupcake</span>
                <span>Dessert</span>
            </li>
            <li>
                <span>Cake</span>
                <span>Dessert</span>
            </li>
            <li>
                <span>Chicken</span>
                <span>Meat</span>
            </li>
        </ul>
    </div>
);

export default RecipeList;