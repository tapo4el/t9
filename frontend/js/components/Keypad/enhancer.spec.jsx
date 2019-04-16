import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

import Keypad from './index';

describe('Keypad enhancer', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    const wrapper = mount(<Provider store={store}><Keypad/></Provider>);

    it ('addSymbol should work correctly', () => {
        wrapper.find('.button').at(1).simulate('click');
        const actions = store.getActions();

        expect(actions[0]).toEqual({ type: 'ADD_SYMBOL', payload: { number: '2', symbol: 'a' } });
    });

    it ('removeSymbol should work correctly', () => {
        wrapper.find('.button').at(9).simulate('click');
        const actions = store.getActions();

        expect(actions[1]).toEqual({ type: 'REMOVE_SYMBOL' });
    });
});
