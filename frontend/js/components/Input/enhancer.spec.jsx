import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Input from './index';

describe('Input enhancer', () => {
    const initialState = {
        inputText: ['Hello'],
        predictionMask: [{symbol: 'a', number: '2'}]
    };
    const mockStore = configureStore();

    it ('should render correctly', () => {
        const component = renderer.create(
            <Input store={mockStore(initialState)}/>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});

// describe('Input enhancer', () => {
//     it ('should rendered correct', () => {
//
//     });
// });
