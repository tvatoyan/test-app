import React from 'react';
import { Item } from './styles';

export type Props = {
    isActive: boolean;
};

function Square({ isActive }: Props) {
    return (
        <Item style={{ backgroundColor: isActive ? 'black' : 'white' }} />
    );
}

export default Square;