import renderer from 'react-test-renderer';
import RecipeDetail from '../components/RecipeDetail';
import { BrowserRouter } from 'react-router-dom'; // Since RecipeDetail has a Link. So it must be wrapped in BrowserRouter to avoid any error
import React from 'react';

describe('<RecipeDetail />', () => {
    let testRecipe;

    beforeEach(() => {
        testRecipe = {
            id: 1,
            name: 'Test recipe',
            category: 'Test category',
            ingredients: ['Ing 1', 'Ing 2'],
            steps: ['Step 1', 'Step 2']
        }; // Since we are modifying testRecipe variable in diff test cases. It's better to define it before Each test case runs
    });

    test('Should not break if no recipe passed', () => {
        const component = renderer.create(
            <BrowserRouter>
                <RecipeDetail />
            </BrowserRouter>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('Should render correctly a recipe', () => {
        const component = renderer.create(
            <BrowserRouter>
                <RecipeDetail recipe={testRecipe} />
            </BrowserRouter>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('Should correctly assign a class name', () => {
        const component = renderer.create(
            <BrowserRouter>
                <RecipeDetail recipe={testRecipe} className="classname-test" />
            </BrowserRouter>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('Should render recipe w/o ingredients', () => {
        delete testRecipe.ingredients;
        const component = renderer.create(
            <BrowserRouter>
                <RecipeDetail recipe={testRecipe} />
            </BrowserRouter>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('Should render recipe w/o steps', () => {
        delete testRecipe.steps;
        const component = renderer.create(
            <BrowserRouter>
                <RecipeDetail recipe={testRecipe} />
            </BrowserRouter>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
})