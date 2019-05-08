import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Suggestions from './index';

describe('Input enhancer', () => {
    const initialState = {
        suggestions: ['Hello', 'world'],
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}><Suggestions /></Provider>);

    it('should render correctly', () => {
        const component = renderer.create(
            <Suggestions store={store} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('addWord should work correctly', () => {
        wrapper.find('li').at(0).simulate('click');
        const actions = store.getActions();

        expect(actions[0]).toEqual({ type: 'ADD_WORD', payload: 'Hello' });
    });
});
