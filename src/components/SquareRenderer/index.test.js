import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import { getNeighborValue, getNeighbors, generateMatrix, matrixManipulation } from '../../utils/helpers';
import SquareRenderer from './index';
import Square from '../Square';

configure({ adapter: new Adapter() });

describe("SquareRenderer", () => {
    let wrapper;
    const props = {
        dimensional: 5
    };

    const matrix = [
        [false,false,false,false,false],
        [false,false,false,false,false],
        [false,true,true,true,false],
        [false,false,false,false,false],
        [false,false,false,false,false]
    ];

    beforeEach(() => {
        wrapper = mount(<SquareRenderer {...props} />);
    });

    describe("On mount", () => {
        it("Has correct square count", () => {
            expect(wrapper.find(Square)).toHaveLength(25);
        });
        it("Has tick button", () => {
            expect(wrapper.find('button')).toHaveLength(1);
        });
    });

    describe("SquareRenderer functions", () => {
        it("getNeighborValue", () => {
            expect(getNeighborValue(0, 0, matrix)).toEqual(false);
            expect(getNeighborValue(-1, 0, matrix)).toEqual(null);
            expect(getNeighborValue(2, 2, matrix)).toEqual(true);
        });
        it("getNeighbors", () => {
            expect(getNeighbors(0, 0, matrix)).toEqual([null, null, false, false, false, null, null, null]);
        });
        it("generateMatrix", () => {
            const matrix = generateMatrix(5);
            expect(matrix.length).toBe(5);
            expect(matrix[0].length).toBe(5);
            expect(matrix[1].length).toBe(5);
            expect(matrix[2].length).toBe(5);
        });
        it("matrixManipulation", () => {
            const newMatrix = matrixManipulation(matrix);
            expect(newMatrix).toEqual([
                    [false,false,false,false,false],
                    [false,false,true,false,false],
                    [false,false,true,false,false],
                    [false,false,true,false,false],
                    [false,false,false,false,false]
                ]);
        });
    });
});