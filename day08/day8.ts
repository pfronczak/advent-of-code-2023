const day8_1 = (input: string[]): number => {
    const directions = input[0].split('');

    const network = new Map();
    for (let i = 2; i < input.length; i++) {
        let [key, valuesList] = input[i].split(' = ');
        let values = valuesList
            .replaceAll('(', '')
            .replaceAll(')', '')
            .split(', ');
        network.set(key, { L: values[0], R: values[1] });
    }

    let steps = 0;
    let node = 'AAA';
    while (node !== 'ZZZ') {
        node = network.get(node)[directions[steps % directions.length]];
        steps++;
    }
    return steps;
};

const day8_2 = (input: string[]): number => {
    const directions = input[0].split('');

    const network = new Map();
    for (let i = 2; i < input.length; i++) {
        let [key, valuesList] = input[i].split(' = ');
        let values = valuesList
            .replaceAll('(', '')
            .replaceAll(')', '')
            .split(', ');
        network.set(key, { L: values[0], R: values[1] });
    }

    let steps = 0;
    let nodes = Array.from(network.keys()).filter((node) => node[2] === 'A');
    let loops = Array(nodes.length).fill(null);
    while (loops.includes(null)) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i] = network.get(nodes[i])[
                directions[steps % directions.length]
            ];
            if (nodes[i][2] === 'Z' && loops[i] == null) {
                loops[i] = steps + 1;
            }
        }
        steps++;
    }
    console.log(loops);
    return loops.reduce((a, b) => lcm(a, b));
};

function gcd(a: number, b: number) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a: number, b: number) {
    return (a * b) / gcd(a, b);
}

export { day8_1, day8_2 };
