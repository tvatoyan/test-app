import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import Square from './index';

configure({ adapter: new Adapter() });

describe("Square", () => {
    describe("On mount", () => {
        it("Has black background", () => {
            const wrapper = mount(<Square isActive={true} />);
            expect(getComputedStyle(wrapper.getDOMNode()).getPropertyValue('background-color')).toBe('black');
        });
        it("Has white background", () => {
            const wrapper = mount(<Square isActive={false} />);
            expect(getComputedStyle(wrapper.getDOMNode()).getPropertyValue('background-color')).toBe('white');
        });
    });
});