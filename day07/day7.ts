const day7_1 = (input: string[]): number => {
    const hands = input.map((line) => {
        let [hand, bid] = line.split(' ');
        return {
            hand: hand
                .replaceAll('T', 'a')
                .replaceAll('J', 'b')
                .replaceAll('Q', 'c')
                .replaceAll('K', 'd')
                .replaceAll('A', 'e'),
            handStrength: handStrength(hand),
            bid: Number(bid),
        };
    });
    hands.sort((a, b) => {
        if (a.handStrength === b.handStrength) {
            return a.hand.localeCompare(b.hand);
        }
        return a.handStrength - b.handStrength;
    });
    // console.log(hands);
    return hands.reduce((acc, hand, idx) => (acc += hand.bid * (idx + 1)), 0);
};

function handStrength(hand): number {
    const freqMap = new Map();
    for (let card of hand) {
        if (freqMap.has(card)) {
            freqMap.set(card, freqMap.get(card) + 1);
        } else {
            freqMap.set(card, 1);
        }
    }
    const freqCount = new Map();
    for (let count of freqMap.values()) {
        if (freqCount.has(count)) {
            freqCount.set(count, freqCount.get(count) + 1);
        } else {
            freqCount.set(count, 1);
        }
    }
    if (freqCount.has(5)) {
        return 6;
    } else if (freqCount.has(4)) {
        return 5;
    } else if (freqCount.has(3) && freqCount.has(2)) {
        return 4;
    } else if (freqCount.has(3)) {
        return 3;
    } else if (freqCount.get(2) === 2) {
        return 2;
    } else if (freqCount.has(2)) {
        return 1;
    }
    return 0;
}

const day7_2 = (input: string[]): number => {
    const hands = input.map((line) => {
        let [hand, bid] = line.split(' ');
        return {
            hand: hand
                .replaceAll('T', 'a')
                .replaceAll('J', '1')
                .replaceAll('Q', 'c')
                .replaceAll('K', 'd')
                .replaceAll('A', 'e'),
            handStrength: handStrengthWithJokers(hand),
            bid: Number(bid),
        };
    });
    hands.sort((a, b) => {
        if (a.handStrength === b.handStrength) {
            return a.hand.localeCompare(b.hand);
        }
        return a.handStrength - b.handStrength;
    });
    console.log(hands);
    return hands.reduce((acc, hand, idx) => (acc += hand.bid * (idx + 1)), 0);
};

function handStrengthWithJokers(hand): number {
    const freqMap = new Map();
    for (let card of hand) {
        if (freqMap.has(card)) {
            freqMap.set(card, freqMap.get(card) + 1);
        } else {
            freqMap.set(card, 1);
        }
    }
    if (freqMap.has('J') && freqMap.get('J') < 5) {
        // jokers
        let [maxFreqCard] = Array.from(freqMap)
            .filter(([card]) => card !== 'J')
            .reduce(
                ([maxCard, maxFreq], [card, freq]) =>
                    freq > maxFreq ? [card, freq] : [maxCard, maxFreq],
                [null, -Infinity]
            );
        freqMap.set(maxFreqCard, freqMap.get(maxFreqCard) + freqMap.get('J'));
        freqMap.delete('J');
    }
    const freqCount = new Map();
    for (let count of freqMap.values()) {
        if (freqCount.has(count)) {
            freqCount.set(count, freqCount.get(count) + 1);
        } else {
            freqCount.set(count, 1);
        }
    }
    if (freqCount.has(5)) {
        return 6;
    } else if (freqCount.has(4)) {
        return 5;
    } else if (freqCount.has(3) && freqCount.has(2)) {
        return 4;
    } else if (freqCount.has(3)) {
        return 3;
    } else if (freqCount.get(2) === 2) {
        return 2;
    } else if (freqCount.has(2)) {
        return 1;
    }
    return 0;
}

export { day7_1, day7_2 };
