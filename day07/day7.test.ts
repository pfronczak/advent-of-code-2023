import { readFileSync } from 'fs';
import { day7_1, day7_2 } from './day7';

const sample = readFileSync('day07/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const input = readFileSync('day07/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 7: Camel Cards', () => {
    test('Part 1, example 1', () => {
        expect(day7_1(sample)).toBe(6440);
    });

    test('Part 1, puzzle input', () => {
        expect(day7_1(input)).toBe(248453531);
    });

    test('Part 2, example 1', () => {
        expect(day7_2(sample)).toBe(5905);
    });

    test('Part 2, puzzle input', () => {
        expect(day7_2(input)).toBe(248781813);
    });
});
