const day5_1 = (input: string[]): number => {
    const maps = parseMaps(input);
    for (let mapping of maps) {
        mapping.sort((a, b) => b.start - a.start);
    }
    let seeds = input[0].split(': ')[1].split(' ').map(Number);
    let minLocation = Infinity;
    for (let seed of seeds) {
        for (let mapping of maps) {
            seed = transformValue(seed, mapping);
        }
        if (seed < minLocation) {
            minLocation = seed;
        }
    }
    return minLocation;
};

function transformValue(val: number, mapping): number {
    for (let m of mapping) {
        if (m.start > val) {
            continue;
        } else if (m.end >= val) {
            return val + m.delta;
        } else {
            return val;
        }
    }
    return val;
}

const day5_2 = (input: string[]): number => {
    const maps = parseMaps(input);
    for (let mapping of maps) {
        mapping.sort((a, b) => a.destStart - b.destStart);
    }
    const seedInput = input[0].split(': ')[1].split(' ').map(Number);
    const seeds = [];
    for (let i = 0; i < seedInput.length; i += 2) {
        seeds.push({
            start: seedInput[i],
            end: seedInput[i] + seedInput[i + 1] - 1,
        });
    }
    seeds.sort((a, b) => a.start - b.start);

    console.log(maps, seeds);

    let minLocation = 0;
    while (true) {
        if (Number.isInteger(Math.log10(minLocation))) {
            console.log(minLocation);
        }
        let val = minLocation;
        for (let i = maps.length - 1; i >= 0; i--) {
            val = reverseTransform(val, maps[i]);
            if (val < 0) break;
        }
        if (seedsContain(val, seeds)) {
            return minLocation;
        }
        minLocation++;
    }
};

function reverseTransform(val: number, mapping): number {
    for (let m of mapping) {
        if (val > m.destEnd) {
            continue;
        } else if (val >= m.destStart) {
            return val - m.delta;
        } else {
            return val;
        }
    }
    return val;
}

function seedsContain(val: number, seeds): boolean {
    for (let range of seeds) {
        if (val < range.start) {
            return false;
        } else if (val >= range.start && val <= range.end) {
            return true;
        }
    }
    return false;
}

function parseMaps(input: string[]) {
    const maps = [];
    let currMap;
    for (let i = 2; i < input.length; i++) {
        if (input[i].includes('map:')) {
            currMap = [];
            maps.push(currMap);
            continue;
        }
        if (input[i] == '') continue;
        let [destStart, srcStart, length] = input[i].split(' ').map(Number);
        currMap.push({
            start: srcStart,
            end: srcStart + length - 1,
            destStart,
            destEnd: destStart + length - 1,
            delta: destStart - srcStart,
        });
    }
    return maps;
}


export { day5_1, day5_2 };
