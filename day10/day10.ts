const PIPE_LINKS = {
    '-': ['L', 'R'],
    '|': ['U', 'D'],
    F: ['D', 'R'],
    '7': ['D', 'L'],
    L: ['U', 'R'],
    J: ['U', 'L'],
    '.': [],
};
const DIRECTIONS = ['U', 'R', 'D', 'L'];
const REVERSE = {
    U: 'D',
    D: 'U',
    L: 'R',
    R: 'L',
};

const day10_1 = (input: string[]): number => {
    let startX, startY;
    const grid = input.map((line) => line.split(''));
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 'S') {
                startX = x;
                startY = y;
            }
        }
    }
    let [currX, currY, dir] = findLinked(grid, startX, startY)[0];
    let loopLength = 1;
    while (grid[currY][currX] !== 'S') {
        loopLength++;
        [currX, currY, dir] = nextTile(grid, currX, currY, dir);
    }
    return loopLength / 2;
};

const day10_2 = (input: string[]): number => {
    let startX, startY;
    const grid = input.map((line) => line.split(''));
    for (let y = 0; y < grid.length && startY == null; y++) {
        for (let x = 0; x < grid[y].length && startX == null; x++) {
            if (grid[y][x] === 'S') {
                startX = x;
                startY = y;
            }
        }
    }
    const startNodes = findLinked(grid, startX, startY);
    let [currX, currY, dir] = startNodes[0];
    const loopSegments = new Set([`${startX},${startY}`]);
    let loopSpin = 0;
    while (grid[currY][currX] !== 'S') {
        loopSegments.add(`${currX},${currY}`);
        let prevDir = dir;
        [currX, currY, dir] = nextTile(grid, currX, currY, dir);
        let dirDiff =
            (DIRECTIONS.indexOf(REVERSE[dir]) -
                DIRECTIONS.indexOf(REVERSE[prevDir]) +
                4) %
            4;
        if (dirDiff === 3) dirDiff = -1;
        loopSpin += dirDiff;
    }
    if (loopSpin < 0) {
        [currX, currY, dir] = startNodes[1];
    } else {
        [currX, currY, dir] = startNodes[0];
    }

    const insideTiles = new Set();
    while (grid[currY][currX] !== 'S') {
        let prevDir = dir,
            prevX = currX,
            prevY = currY;
        [currX, currY, dir] = nextTile(grid, currX, currY, dir);
        rightRay(prevX, prevY, REVERSE[prevDir], loopSegments).forEach(
            insideTiles.add,
            insideTiles
        );
        rightRay(prevX, prevY, REVERSE[dir], loopSegments).forEach(
            insideTiles.add,
            insideTiles
        );
    }
    console.log(insideTiles);
    return insideTiles.size;
};

function rightRay(x, y, dir, loopSegments) {
    const insideTiles = [];
    let [currX, currY] = [x, y];
    const rightDir = DIRECTIONS[(DIRECTIONS.indexOf(dir) + 1) % 4];
    while (true) {
        [currX, currY] = move(currX, currY, rightDir);
        if (!loopSegments.has(`${currX},${currY}`)) {
            insideTiles.push(`${currX},${currY}`);
        } else {
            return insideTiles;
        }
    }
}

function findLinked(grid, x, y) {
    const startNodes = [];
    if (y > 0 && PIPE_LINKS[grid[y - 1][x]].includes('D'))
        startNodes.push([x, y - 1, 'D']);
    if (x > 0 && PIPE_LINKS[grid[y][x - 1]].includes('R'))
        startNodes.push([x - 1, y, 'R']);
    if (PIPE_LINKS[grid[y][x + 1]].includes('L'))
        startNodes.push([x + 1, y, 'L']);
    if (PIPE_LINKS[grid[y + 1][x]].includes('U'))
        startNodes.push([x, y + 1, 'U']);
    return startNodes;
}

function nextTile(grid, x, y, dirFrom) {
    let dir = PIPE_LINKS[grid[y][x]].filter((d) => d !== dirFrom)[0];
    return [...move(x, y, dir), REVERSE[dir]];
}

function move(x, y, dir): number[] {
    switch (dir) {
        case 'R':
            return [x + 1, y];
        case 'L':
            return [x - 1, y];
        case 'U':
            return [x, y - 1];
        case 'D':
            return [x, y + 1];
    }
    return [x, y];
}

export { day10_1, day10_2 };
