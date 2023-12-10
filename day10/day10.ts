const PIPE_LINKS = {
    '-': ['L', 'R'],
    '|': ['U', 'D'],
    F: ['D', 'R'],
    '7': ['D', 'L'],
    L: ['U', 'R'],
    J: ['U', 'L'],
    '.': []
};
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
        for (let x = 0; x < grid.length; x++) {
            if (grid[y][x] === 'S') {
                startX = x;
                startY = y;
            }
        }
    }
    let [currX, currY, dir] = findLinked(grid, startX, startY);
    let loopLength = 1;
    while (grid[currY][currX] !== 'S') {
        loopLength++;
        [currX, currY, dir] = nextTile(grid, currX, currY, dir);
    }
    return loopLength / 2;
};

const day10_2 = (input: string[]): number => {
    return 0;
};

function findLinked(grid, x, y) {
    if (y > 0 && PIPE_LINKS[grid[y - 1][x]].includes('D'))
        return [x, y - 1, 'D'];
    if (x > 0 && PIPE_LINKS[grid[y][x - 1]].includes('R'))
        return [x - 1, y, 'R'];
    if (PIPE_LINKS[grid[y][x + 1]].includes('L')) return [x + 1, y, 'L'];
    if (PIPE_LINKS[grid[y + 1][x]].includes('U')) return [x, y + 1, 'U'];
}

function nextTile(grid, x, y, dirFrom) {
    let dir = PIPE_LINKS[grid[y][x]].filter((d) => d !== dirFrom)[0];
    switch (dir) {
        case 'R':
            return [x + 1, y, REVERSE[dir]];
        case 'L':
            return [x - 1, y, REVERSE[dir]];
        case 'U':
            return [x, y - 1, REVERSE[dir]];
        case 'D':
            return [x, y + 1, REVERSE[dir]];
    }
    return [x, y, dirFrom];
}

export { day10_1, day10_2 };
