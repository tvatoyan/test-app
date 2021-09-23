import { MatrixType } from '../components/SquareRenderer';

/**
 * Detects if matrix item has value or not.
 * @param i - Matrix i index
 * @param j - Matrix j index
 * @param matrix - Matrix data
 * @returns matrix value
 */
export const getNeighborValue = (i: number, j: number, matrix: MatrixType) => {
    const NO_VALUE = null;
    let value, hasValue;

    try {
        hasValue = matrix[i][j] !== undefined;
        value = hasValue?  matrix[i][j] : NO_VALUE;
    } catch(e) {
        value = NO_VALUE;
    }

    return value;
};

/**
 * Generates array of matrix neighbors.
 * @param i - Matrix i index
 * @param j - Matrix j index
 * @param matrix - Matrix data
 * @returns array
 */
export const getNeighbors = (i: number, j: number, matrix: MatrixType) => {
    return [
        getNeighborValue(i - 1, j, matrix),
        getNeighborValue(i - 1, j +1, matrix),
        getNeighborValue(i, j + 1, matrix),
        getNeighborValue(i + 1, j + 1, matrix),
        getNeighborValue(i + 1, j, matrix),
        getNeighborValue(i + 1, j - 1, matrix),
        getNeighborValue(i, j - 1, matrix),
        getNeighborValue(i - 1, j - 1, matrix),
    ]
};

/**
 * Generates 2D matrix.
 * @param dimensional - Matrix dimension
 * @returns array matrix
 */
export const generateMatrix = (dimensional: number) => {
    let matrix: MatrixType = [];

    for(let i = 0; i < dimensional; i++) {
        matrix[i] = [];
        for(let j = 0; j < dimensional; j++) {
            matrix[i][j] = Boolean(Math.round(Math.random()));
        }
    }

    return matrix;
};

/**
 * Generates new matrix
 * @param matrix - Matrix data
 * @returns array
 */
export const matrixManipulation = (matrix: MatrixType) => {
    const newMatrix: MatrixType = matrix.map(arr => arr.slice());
    const length = newMatrix.length;

    for (let i = 0; i < length; i++ ) {
        for (let j = 0; j < length; j++) {
            const neighbors = getNeighbors(i, j, matrix);
            const liveCellCount = neighbors.filter(item => item === true).length;

            if (matrix[i][j]) {
                if (liveCellCount < 2 || liveCellCount > 3) {
                    newMatrix[i][j] = false;
                }

            } else {
                if (liveCellCount === 3) {
                    newMatrix[i][j] = true;
                }
            }
        }
    }

    return newMatrix;
};