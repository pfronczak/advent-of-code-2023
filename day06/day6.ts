const day6_1 = (input: string[]): number => {
    const times = input[0].split(':')[1].split(/\s+/).map(Number);
    const records = input[1].split(':')[1].split(/\s+/).map(Number);
    let result = 1;
    for (let i = 0; i < times.length; i++) {
        let margin = 0;
        for (let hold = 2; hold < times[i]; hold++) {
            if (hold * (times[i] - hold) > records[i]) {
                margin++;
            }
        }
        if (margin > 0) result *= margin;
    }
    return result;
};

const day6_2 = (input: string[]): number => {
    const time = Number(input[0].split(':')[1].replaceAll(' ', ''));
    const record = Number(input[1].split(':')[1].replaceAll(' ', ''));
    let result = 0;
    for (let hold = 2; hold < time; hold++) {
        if (hold * (time - hold) > record) {
            result++;
        }
    }
    return result;
};

export { day6_1, day6_2 };
