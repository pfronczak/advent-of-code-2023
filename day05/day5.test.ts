import { readFileSync } from 'fs';
import { day5_1, day5_2 } from './day5';

const sample = readFileSync('day05/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const input = readFileSync('day05/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 5: If You Give A Seed A Fertilizer', () => {
    test('Part 1, example 1', () => {
        expect(day5_1(sample)).toBe(35);
    });

    test('Part 1, puzzle input', () => {
        expect(day5_1(input)).toBe(227653707);
    });

    test('Part 2, example 1', () => {
        expect(day5_2(sample)).toBe(46);
    });

    test('Part 2, puzzle input', () => {
        expect(day5_2(input)).toBe(78775051);
    });
});
