const day2_1 = (input: string[]): number => {
    const cubeCount = {
        red: 12,
        green: 13,
        blue: 14,
    };
    let gamesSum = input
        .filter((line) => {
            let [, subsets] = line.split(': ');
            for (let subset of subsets.split('; ')) {
                for (let draw of subset.split(', ')) {
                    let [count, color] = draw.split(' ');
                    if (Number(count) > cubeCount[color]) {
                        return false;
                    }
                }
            }
            return true;
        })
        .map((line) => Number(line.split(': ')[0].split(' ')[1]))
        .reduce((sum, gameId) => sum + gameId);
    return gamesSum;
};

const day2_2 = (input: string[]): number => {
    let result = 0;
    for (let line of input) {
        let minCount = {
            red: 0,
            green: 0,
            blue: 0
        };
        let [, subsets] = line.split(': ');
        for (let subset of subsets.split('; ')) {
            for (let draw of subset.split(', ')) {
                let [count, color] = draw.split(' ');
                if (Number(count) > minCount[color]) {
                    minCount[color] = Number(count);
                }
            }
        }
        result += minCount.red * minCount.green * minCount.blue;
    }
    return result;
};

export { day2_1, day2_2 };
