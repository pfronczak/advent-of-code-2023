const day3_1 = (input: string[]): number => {
    let partSum = 0;
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (isDigit(input[y][x])) {
                let partNumber = '';
                let startX = x,
                    endX = x;
                while (isDigit(input[y][x]) && x < input[y].length) {
                    partNumber += input[y][x];
                    endX = x;
                    x++;
                }
                if (adjacentToSymbol(input, y, startX, endX)) {
                    partSum += Number(partNumber);
                }
            }
        }
    }
    return partSum;
};

const day3_2 = (input: string[]): number => {
    let gearRatioSum = 0;
    const gears = new Map();
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (isDigit(input[y][x])) {
                let partNumber = '';
                let startX = x,
                    endX = x;
                while (isDigit(input[y][x]) && x < input[y].length) {
                    partNumber += input[y][x];
                    endX = x;
                    x++;
                }
                let starCoords = adjacentToStar(input, y, startX, endX);
                if (starCoords) {
                    gears.has(starCoords)
                        ? gears.get(starCoords).push(Number(partNumber))
                        : gears.set(starCoords, [Number(partNumber)]);
                }
            }
        }
    }
    for (let parts of gears.values()) {
        if (parts.length === 2) {
            gearRatioSum += parts[0] * parts[1];
        }
    }
    return gearRatioSum;
};

function isDigit(char: string): boolean {
    return char <= '9' && char >= '0';
}

function adjacentToSymbol(
    input: string[],
    y: number,
    startX: number,
    endX: number
): boolean {
    if (y > 0) {
        for (let x = startX - 1; x <= endX + 1; x++) {
            if (x >= 0 && x < input[y - 1].length) {
                if (!isDigit(input[y - 1][x]) && input[y - 1][x] !== '.') {
                    return true;
                }
            }
        }
    }
    if (y < input.length - 1) {
        for (let x = startX - 1; x <= endX + 1; x++) {
            if (x >= 0 && x < input[y + 1].length) {
                if (!isDigit(input[y + 1][x]) && input[y + 1][x] !== '.') {
                    return true;
                }
            }
        }
    }
    if (
        startX > 0 &&
        !isDigit(input[y][startX - 1]) &&
        input[y][startX - 1] !== '.'
    ) {
        return true;
    }
    if (
        endX < input[y].length - 1 &&
        !isDigit(input[y][endX + 1]) &&
        input[y][endX + 1] !== '.'
    ) {
        return true;
    }
    return false;
}

function adjacentToStar(
    input: string[],
    y: number,
    startX: number,
    endX: number
): string {
    if (y > 0) {
        for (let x = startX - 1; x <= endX + 1; x++) {
            if (x >= 0 && x < input[y - 1].length) {
                if (input[y - 1][x] === '*') {
                    return `${y - 1},${x}`;
                }
            }
        }
    }
    if (y < input.length - 1) {
        for (let x = startX - 1; x <= endX + 1; x++) {
            if (x >= 0 && x < input[y + 1].length) {
                if (input[y + 1][x] === '*') {
                    return `${y + 1},${x}`;
                }
            }
        }
    }
    if (startX > 0 && input[y][startX - 1] === '*') {
        return `${y},${startX - 1}`;
    }
    if (endX < input[y].length - 1 && input[y][endX + 1] === '*') {
        return `${y},${endX + 1}`;
    }
    return null;
}

export { day3_1, day3_2 };
