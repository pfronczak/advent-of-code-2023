const day4_1 = (input: string[]): number => {
    let result = 0;
    for (let line of input) {
        let [winningNumbers, numbers] = line
            .split(': ')[1]
            .split(' | ')
            .map((numList) => numList.trim().split(/\s+/).map(Number));
        let winningSet = new Set(winningNumbers);
        let hitCount = 0;
        for (let num of numbers) {
            if (winningSet.has(num)) hitCount++;
        }
        if (hitCount > 0) {
            result += Math.pow(2, hitCount - 1);
        }
    }
    return result;
};

const day4_2 = (input: string[]): number => {
    let cardsCount = Array(input.length).fill(1);

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let [winningNumbers, numbers] = line
            .split(': ')[1]
            .split(' | ')
            .map((numList) => numList.trim().split(/\s+/).map(Number));
        let winningSet = new Set(winningNumbers);
        let hitCount = 0;
        for (let num of numbers) {
            if (winningSet.has(num)) hitCount++;
        }
        for (let j = 0; j < hitCount; j++) {
            cardsCount[i + j + 1] += cardsCount[i];
        }
    }

    console.log(cardsCount);

    return cardsCount.reduce((sum, count) => sum + count);
};

export { day4_1, day4_2 };
