const day11_1 = (input: string[]): number => {
    const grid = [];
    for (let row of input) {
        grid.push(row.split(''));
        if (!row.includes('#')) {
            grid.push(row.split(''));
        }
    }
    for (let x = 0; x < grid[0].length; x++) {
        let emptyCol = true;
        for (let y = 0; y < grid.length; y++) {
            if (grid[y][x] === '#') {
                emptyCol = false;
                break;
            }
        }
        if (emptyCol) {
            for (let y = 0; y < grid.length; y++) {
                grid[y].splice(x, 0, '.');
            }
            x++;
        }
    }

    const galaxies = [];
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '#') {
                galaxies.push({ x, y });
            }
        }
    }

    const distances = Array(galaxies.length).fill(0).map(() => Array(galaxies.length).fill(0));
    for (let y = 0; y < galaxies.length; y++) {
        for (let x = 0; x < galaxies.length; x++) {
            distances[y][x] = Math.abs(galaxies[y].x - galaxies[x].x) + Math.abs(galaxies[y].y - galaxies[x].y);
        }
    }
    return distances.reduce((sum, arr) => sum + arr.reduce((sum2, val) => sum2 + val || 0, 0), 0) / 2;
};

const day11_2 = (input: string[]): number => {
    const EXPANSION_RATE = 1000000;
    const grid = [];
    const yCoords = [];
    const xCoords = [];

    for (let y = 0, yPos = 0; y < input.length; y++, yPos++) {
        let row = input[y];
        grid.push(row.split(''));
        yCoords.push(yPos);
        if (!row.includes('#')) {
            yPos += EXPANSION_RATE - 1;
        }
    }
    for (let x = 0, xPos = 0; x < grid[0].length; x++, xPos++) {
        let emptyCol = true;
        for (let y = 0; y < grid.length; y++) {
            if (grid[y][x] === '#') {
                emptyCol = false;
                break;
            }
        }
        xCoords.push(xPos);
        if (emptyCol) {
            xPos += EXPANSION_RATE - 1;
        }
    }

    const galaxies = [];
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '#') {
                galaxies.push({ x: xCoords[x], y: yCoords[y] });
            }
        }
    }

    const distances = Array(galaxies.length).fill(0).map(() => Array(galaxies.length).fill(0));
    for (let y = 0; y < galaxies.length; y++) {
        for (let x = 0; x < galaxies.length; x++) {
            distances[y][x] = Math.abs(galaxies[y].x - galaxies[x].x) + Math.abs(galaxies[y].y - galaxies[x].y);
        }
    }
    return distances.reduce((sum, arr) => sum + arr.reduce((sum2, val) => sum2 + val || 0, 0), 0) / 2;
};

export { day11_1, day11_2 };
