import React from 'react';

const RecipeDetail = (props) => (
    <div style={props.style}>
        <h2>Cupcake</h2>
        <img src="https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg" width="200"/>
        <div>
            <span>Dessert</span>
            <span>1200 cal</span>
        </div>
        <h3>Ingredients:</h3>
        <ul>
            <li>1 package this and that</li>
            <li>1 package this and that</li>
            <li>1 package this and that</li>
        </ul>
        <h3>Steps:</h3>
        <ol>
            <li>First do this</li>
            <li>Second do this</li>
            <li>Third do this</li>
        </ol>
    </div>
);

export default RecipeDetail;