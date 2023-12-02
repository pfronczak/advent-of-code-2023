const day1_1 = (input: string[]): number => {
    let sum = 0;
    for (const line of input) {
        let value = '';
        for (let i = 0; i < line.length; i++) {
            let char = line.charAt(i);
            if (char >= '0' && char <= '9') {
                value += char;
                break;
            }
        }
        for (let i = line.length - 1; i >= 0; i--) {
            let char = line.charAt(i);
            if (char >= '0' && char <= '9') {
                value += char;
                break;
            }
        }
        sum += Number(value);
    }
    return sum;
};

const day1_2 = (input: string[]): number => {
    const nameToDigit = new Map([['one', '1'], ['two', '2'], ['three', '3'], ['four', '4'], ['five', '5'], ['six', '6'], ['seven', '7'], ['eight', '8'], ['nine', '9']]);
    let sum = 0;
    for (const line of input) {
        let value = '';
        const firstDigit = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/)[0];
        value += nameToDigit.has(firstDigit) ? nameToDigit.get(firstDigit) : firstDigit;
        const lastDigit = line.split('').reverse().join('').match(/\d|enin|thgie|neves|xis|evif|ruof|eerht|owt|eno/)[0].split('').reverse().join('');
        value += nameToDigit.has(lastDigit) ? nameToDigit.get(lastDigit) : lastDigit;
        sum += Number(value);
    }
    return sum;
};

export { day1_1, day1_2 };
