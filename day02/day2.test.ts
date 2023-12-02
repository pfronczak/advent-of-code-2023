import { readFileSync } from 'fs';
import { day2_1, day2_2 } from './day2';

const sample = readFileSync('day02/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const input = readFileSync('day02/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 2: Cube Conundrum', () => {
    test('Part 1, example 1', () => {
        expect(day2_1(sample)).toBe(8);
    });

    test('Part 1, puzzle input', () => {
        expect(day2_1(input)).toBe(2176);
    });

    test('Part 2, example 1', () => {
        expect(day2_2(sample)).toBe(2286);
    });

    test('Part 2, puzzle input', () => {
        expect(day2_2(input)).toBe(63700);
    });
});
