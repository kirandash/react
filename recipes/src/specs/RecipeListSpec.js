import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';
import React from 'react';

const testRecipes = [
    {
        id: 1,
        name: 'Recipe 1',
        category: 'Category 1'
    },
    {
        id: 2,
        name: 'Recipe 2',
        category: 'Category 2'
    }
]

describe('<RecipeList />', () => {
    test('Should not break if no recipe passed', () => {
        const component = renderer.create(
            <RecipeList />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('Should render correctly', () => {
        const component = renderer.create(
            <RecipeList recipes={testRecipes} />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('Should render favorited state', () => {
        const component = renderer.create(
            <RecipeList recipes={testRecipes} favorites={[1]} />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
})