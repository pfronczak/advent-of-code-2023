const day14_1 = (input: string[]): number => {
    const platform = input.map(row => row.split(''));
    for (let x = 0; x < platform[0].length; x++) {
        let border = -1;
        for (let y = 0; y < platform.length; y++) {
            if (platform[y][x] === 'O') {
                [platform[y][x], platform[border + 1][x]] = [platform[border + 1][x], platform[y][x]];
                border++;
            } else if (platform[y][x] === '#') {
                border = y;
            }
        }
    }
    return platform.reduce((sum, row, idx) => sum + row.filter(val => val === 'O').length * (platform.length - idx), 0);
};

const day14_2 = (input: string[]): number => {
    const CYCLES = 1000000000;
    let platformFast = input.map(row => row.split(''));
    let platformSlow = input.map(row => row.split(''));
    do {
        platformSlow = cycle(platformSlow);
        platformFast = cycle(cycle(platformFast));
    } while (flatten(platformFast) !== flatten(platformSlow));

    platformSlow = input.map(row => row.split(''));
    let cycleStart = 1;
    while (flatten(platformFast) !== flatten(platformSlow)) {
        platformSlow = cycle(platformSlow);
        platformFast = cycle(platformFast);
        cycleStart++;
    }

    let cycleLength = 0;
    do {
        platformFast = cycle(platformFast);
        cycleLength++;
    } while (flatten(platformFast) !== flatten(platformSlow));

    console.log(cycleStart, cycleLength);

    for (let i = 0; i < (CYCLES + 1 - cycleStart) % cycleLength; i++) {
        platformSlow = cycle(platformSlow);
    }

    console.log(platformSlow.reduce((sum, row, idx) => sum + row.filter(val => val === 'O').length * (platformSlow.length - idx), 0));

    return platformSlow.reduce((sum, row, idx) => sum + row.filter(val => val === 'O').length * (platformSlow.length - idx), 0);
};

function cycle(platform) {
    // North
    for (let x = 0; x < platform[0].length; x++) {
        let border = -1;
        for (let y = 0; y < platform.length; y++) {
            if (platform[y][x] === 'O') {
                [platform[y][x], platform[border + 1][x]] = [platform[border + 1][x], platform[y][x]];
                border++;
            } else if (platform[y][x] === '#') {
                border = y;
            }
        }
    }
    // West
    for (let y = 0; y < platform.length; y++) {
        let border = -1;
        for (let x = 0; x < platform[0].length; x++) {
            if (platform[y][x] === 'O') {
                [platform[y][x], platform[y][border + 1]] = [platform[y][border + 1], platform[y][x]];
                border++;
            } else if (platform[y][x] === '#') {
                border = x;
            }
        }
    }
    // South
    for (let x = 0; x < platform[0].length; x++) {
        let border = platform.length;
        for (let y = platform.length - 1; y >= 0; y--) {
            if (platform[y][x] === 'O') {
                [platform[y][x], platform[border - 1][x]] = [platform[border - 1][x], platform[y][x]];
                border--;
            } else if (platform[y][x] === '#') {
                border = y;
            }
        }
    }
    // East
    for (let y = 0; y < platform.length; y++) {
        let border = platform[0].length;
        for (let x = platform[0].length - 1; x >= 0; x--) {
            if (platform[y][x] === 'O') {
                [platform[y][x], platform[y][border - 1]] = [platform[y][border - 1], platform[y][x]];
                border--;
            } else if (platform[y][x] === '#') {
                border = x;
            }
        }
    }
    return platform;
}

function flatten(platform: string[][]): string {
    return ''.concat(...platform.map(row => row.join('')));
}

export { day14_1, day14_2 };
