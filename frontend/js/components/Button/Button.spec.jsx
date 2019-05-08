import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Button from './Button';

describe('Button', () => {
    it('should render correctly', () => {
        const component = renderer.create(
            <Button value="2" onClickHandler={() => {}} text="abc" />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should work correctly', () => {
        const spy = jest.fn();

        const wrapper = mount(<Button value="2" onClickHandler={spy} text="abc" />);
        wrapper.find('.button').simulate('click');
        expect(spy).toHaveBeenCalled();
        expect(spy.mock.calls[0]).toMatchSnapshot();
    });
});
