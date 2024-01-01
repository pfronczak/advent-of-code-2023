const day12_1 = (input: string[]): number => {
    const conditions: string[] = [];
    const arrangements: number[][] = [];
    for (let row of input) {
        let [condition, arr] = row.split(' ');
        conditions.push(condition);
        arrangements.push(arr.split(',').map(Number));
    }

    let sumValid = 0;
    for (let i = 0; i < conditions.length; i++) {
        sumValid += countValid2(conditions[i], arrangements[i]);
    }
    return sumValid;
};

function countValid(condition: string, arrangement: number[]): number {
    let count = 0;

    function generateCandidates(condition: string, index = 0, candidates: string[] = []): string[] {
        while (condition[index] !== '?' && index < condition.length) index++;
        if (index == condition.length) {
            candidates.push(condition);
            return candidates;
        }
        generateCandidates(condition.substring(0, index) + '.' + condition.substring(index + 1), index + 1, candidates);
        generateCandidates(condition.substring(0, index) + '#' + condition.substring(index + 1), index + 1, candidates);
        return candidates;
    }

    function isValid(candidate: string, arrangement: number[]) {
        let sequences = candidate.split(/\.+/).filter(s => s !== '').map(s => s.length);
        return JSON.stringify(sequences) === JSON.stringify(arrangement);
    }

    for (let candidate of generateCandidates(condition)) {
        if (isValid(candidate, arrangement)) {
            count++;
        }
    }
    return count;
}

const day12_2 = (input: string[]): number => {
    const conditions: string[] = [];
    const arrangements: number[][] = [];
    for (let row of input) {
        let [condition, arr] = row.split(' ');
        conditions.push(`${condition}?${condition}?${condition}?${condition}?${condition}`);
        let arrTab = arr.split(',').map(Number);
        arrangements.push(arrTab.concat(arrTab).concat(arrTab).concat(arrTab).concat(arrTab));
    }

    let sumValid = 0;
    for (let i = 0; i < conditions.length; i++) {
        let count = countValid2(conditions[i], arrangements[i]);
        console.log('count:', count);
        sumValid += count;
    }
    return sumValid;
};

function countValid2(condition: string, arrangement: number[]): number {
    let count = 0;
    doCount(condition, arrangement, 0, 0, 0);

    function doCount(condition: string, arrangement: number[], index: number, j: number, seqLength: number) {
        for (let i = index; i < condition.length; i++) {
            if (condition[i] === '#') {
                seqLength++;
                if (j >= arrangement.length) return;
                if (seqLength > arrangement[j]) return;
                if (i === condition.length - 1 && seqLength === arrangement[j]) {
                    j++;
                }
            } else if (condition[i] === '.' && seqLength > 0) {
                if (seqLength !== arrangement[j]) {
                    return;
                }
                j++;
                seqLength = 0;
            } else if (condition[i] === '?') {
                doCount(condition.substring(0, i) + '.' + condition.substring(i + 1), arrangement, i, j, seqLength);
                doCount(condition.substring(0, i) + '#' + condition.substring(i + 1), arrangement, i, j, seqLength);
                return;
            }
            if (condition[i] === '.' && condition.length - i - 1 < arrangement.length - 1 - j + arrangement.reduce((sum, val, idx) => idx < j ? sum : sum + val, 0)) {
                return;
            }
        }
        if (j === arrangement.length) {
            count++;
            if (Number.isInteger(Math.log10(count))) {
                console.log(count);
            }
        }
    }

    return count;
}

export { day12_1, day12_2 };
