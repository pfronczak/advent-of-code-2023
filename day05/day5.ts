const day5_1 = (input: string[]): number => {
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
        currMap.push({ start: srcStart, end: srcStart + length - 1, delta: destStart - srcStart });
    }
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

const day5_2 = (input: string[]): number => {
    return 0;
};

function transformValue(val: number, mapping): number {
    for (let m of mapping) {
        if (m.start > val) {
            continue
        } else if (m.end >= val) {
            return val + m.delta;
        } else {
            return val;
        }
    }
    return val;
}

export { day5_1, day5_2 };
