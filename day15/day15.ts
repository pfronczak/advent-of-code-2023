const day15_1 = (input: string[]): number => {
    let sum = 0;
    for (let seq of input[0].split(',')) {
        sum += hashCode(seq);
    }
    return sum;
};

const day15_2 = (input: string[]): number => {
    const hashmap = Array(256).fill(0).map(() => []);
    for (let seq of input[0].split(',')) {
        if (seq.endsWith('-')) {
            let keyToRemove = seq.split('-')[0];
            hashmap[hashCode(keyToRemove)] = hashmap[hashCode(keyToRemove)].filter(([key]) => key !== keyToRemove)
        } else if (seq.includes('=')) {
            let [keyToAdd, valToAdd] = seq.split(('='));
            let box = hashmap[hashCode(keyToAdd)];
            let found = false;
            for (let i = 0; i < box.length; i++) {
                let [key, val] = box[i];
                if (key === keyToAdd) {
                    box[i] = [key, valToAdd];
                    found = true;
                    break;
                }
            }
            if (!found) hashmap[hashCode(keyToAdd)].push([keyToAdd, valToAdd]);
        }
    }
    return hashmap.reduce(
        (sum, box, i) => sum + (i + 1) * box.reduce(
            (boxSum, [key, val], j) => boxSum + (j + 1) * val
        , 0)
    , 0);
};

function hashCode(str: string): number {
    let hash = 0;
    for (let char of str) {
        hash  = ((hash + char.charCodeAt(0)) * 17) % 256;
    }
    return hash;
}

export { day15_1, day15_2 };
