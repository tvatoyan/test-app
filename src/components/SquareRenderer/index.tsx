import React, { useState, useEffect } from 'react';
import { Wrapper, MatrixWrapper, Button, MatrixItemWrapper } from './styles';
import { generateMatrix, matrixManipulation } from '../../utils/helpers';
import Square from '../Square';

export type MatrixType = Array<Array<boolean>>;

export type Props = {
    dimensional: number;
};

function SquareRenderer({ dimensional }: Props) {
    const [matrix, setMatrix] = useState<MatrixType>([]);

    useEffect(() => {
        setMatrix(generateMatrix(dimensional))
    }, []);

    /**
     * Generates new matrix and update UI.
     */
    const onTick = () => {
        setMatrix(matrixManipulation(matrix));
    };


    return (
        <Wrapper>
            <MatrixWrapper>
                {matrix.map((item, index) => {
                    return (
                        <MatrixItemWrapper key={index}>
                            {item.map((value: boolean, index: number) => <Square key={index} isActive={value} />)}
                        </MatrixItemWrapper>
                    )
                })}
            </MatrixWrapper>
            <Button onClick={onTick}>Tick</Button>
        </Wrapper>
    );
}

export default SquareRenderer;