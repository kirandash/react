import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import React from 'react';

describe('<Header />', () => {
    // Header component doesn't have any ip/props
    test('Should render correctly', () => {
        const component = renderer.create(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
})