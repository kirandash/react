import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';
import React from 'react';

const testRecipe = {
    id: 1,
    name: 'Test recipe',
    category: 'Test category'
};

describe('<RecipeListItem />', () => {
    test('Should not break if no recipe passed', () => {
        const component = renderer.create(
            <RecipeListItem />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('Should correctly render recipe', () => {
        const component = renderer.create(
            <RecipeListItem recipe={testRecipe} />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('Should render favorited state', () => {
        const component = renderer.create(
            <RecipeListItem recipe={testRecipe} favorited={true} />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
})