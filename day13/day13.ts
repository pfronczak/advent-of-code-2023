const day13_1 = (input: string[]): number => {
    let result = 0;
    let startRow = 0;
    for (let i = 0; i < input.length; i++) {
        if (i == input.length - 1 || input[i + 1] == '') {
            let pattern = input.slice(startRow, i + 1);
            let columnValues = getColValues(pattern);
            let verticalRef = findReflection(columnValues);
            if (verticalRef != null) result += verticalRef;

            let rowValues = getRowValues(pattern);
            let horizontalRef = findReflection(rowValues);
            if (horizontalRef != null) result += 100 * horizontalRef;
            startRow = i + 2;
        }
    }
    return result;
};


const day13_2 = (input: string[]): number => {
    let result = 0;
    let startRow = 0;
    for (let i = 0; i < input.length; i++) {
        if (i == input.length - 1 || input[i + 1] == '') {
            let pattern = input.slice(startRow, i + 1);
            let origColumnValues = getColValues(pattern);
            let origVerticalRef = findReflection(origColumnValues);
            let origRowValues = getRowValues(pattern);
            let origHorizontalRef = findReflection(origRowValues);

            result += otherReflection(pattern, origColumnValues, origVerticalRef, origRowValues, origHorizontalRef);
            startRow = i + 2;
        }
    }
    return result;
};


function otherReflection(pattern: string[], origColumnValues: number[], origVerticalRef: number, origRowValues: number[], origHorizontalRef: number) {
    for (let y = 0; y < pattern.length; y++) {
        for (let x = 0; x < pattern[y].length; x++) {
            let columnValues = [...origColumnValues];
            if (pattern[y][x] === '#') columnValues[x] -= Math.pow(2, y);
            else columnValues[x] += Math.pow(2, y);

            let verticalRef = findReflection(columnValues, origVerticalRef);
            if (verticalRef != null && verticalRef !== origVerticalRef) return verticalRef;

            let rowValues = [...origRowValues];
            if (pattern[y][x] === '#') rowValues[y] -= Math.pow(2, x);
            else rowValues[y] += Math.pow(2, x);

            let horizontalRef = findReflection(rowValues, origHorizontalRef);
            if (horizontalRef != null && horizontalRef !== origHorizontalRef) return 100 * horizontalRef;
        }
    }
}

function getColValues(input: string[]): number[] {
    let columns = [];
    for (let x = 0; x < input[0].length; x++) {
        let colVal = 0;
        let pow = 1;
        for (let y = 0; y < input.length; y++) {
            if (input[y][x] === '#') colVal += pow;
            pow *= 2;
        }
        columns.push(colVal)
    }
    return columns;
}

function getRowValues(input: string[]): number[] {
    let rows = [];
    for (let y = 0; y < input.length; y++) {
        let rowVal = 0;
        let pow = 1;
        for (let x = 0; x < input[0].length; x++) {
            if (input[y][x] === '#') rowVal += pow;
            pow *= 2;
        }
        rows.push(rowVal)
    }
    return rows;
}

function findReflection(values: number[], skip?: number): number | null {
    for (let i = 1; i < values.length; i++) {
        let reflection = true;
        for (let j = 0; i - j > 0 && i + j < values.length; j++) {
            if (values[i + j] !== values[i - j - 1]) {
                reflection = false;
                break;
            }
        }
        if (reflection && i !== skip) return i;
    }
    return null;
}

export { day13_1, day13_2 };
