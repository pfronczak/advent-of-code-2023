const day9_1 = (input: string[]): number => {
    const sequences = [];
    for (let line of input) {
        const diffs = [line.split(' ').map(Number)];
        sequences.push(diffs);
        while (diffs[diffs.length - 1].some((val) => val !== 0)) {
            diffs.push(
                diffs[diffs.length - 1].reduce((acc, val, i, arr) => {
                    if (i > 0) acc.push(val - arr[i - 1]);
                    return acc;
                }, [])
            );
        }
        diffs[diffs.length - 1].push(0);
        for (let i = diffs.length - 2; i >= 0; i--) {
            diffs[i].push(diffs[i][diffs[i].length - 1] + diffs[i + 1][diffs[i + 1].length - 1]);
        }
    }
    // console.log(sequences);
    return sequences.reduce((sum, seq) => sum + seq[0][seq[0].length - 1], 0);
};

const day9_2 = (input: string[]): number => {
    const sequences = [];
    for (let line of input) {
        const diffs = [line.split(' ').map(Number)];
        sequences.push(diffs);
        while (diffs[diffs.length - 1].some((val) => val !== 0)) {
            diffs.push(
                diffs[diffs.length - 1].reduce((acc, val, i, arr) => {
                    if (i > 0) acc.push(val - arr[i - 1]);
                    return acc;
                }, [])
            );
        }
        diffs[diffs.length - 1].unshift(0);
        for (let i = diffs.length - 2; i >= 0; i--) {
            diffs[i].unshift(diffs[i][0] - diffs[i + 1][0]);
        }
    }
    // console.log(sequences);
    return sequences.reduce((sum, seq) => sum + seq[0][0], 0);
};

export { day9_1, day9_2 };
