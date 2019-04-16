import React from 'react';
import renderer from 'react-test-renderer';

import Keypad from './Keypad';

describe('Keypad', () => {
    it ('should render correctly', () => {
        const component = renderer.create(
            <Keypad addSymbol={()=>{}} removeSymbol={()=>{}}/>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });
});
