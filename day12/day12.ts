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
        sumValid += countValid(conditions[i], arrangements[i]);
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
    return 0;
};

export { day12_1, day12_2 };
