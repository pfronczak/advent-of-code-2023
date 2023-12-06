import { readFileSync } from 'fs';
import { day6_1, day6_2 } from './day6';

const sample = readFileSync('day06/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const input = readFileSync('day06/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 6: Wait For It', () => {
    test('Part 1, example 1', () => {
        expect(day6_1(sample)).toBe(288);
    });

    test('Part 1, puzzle input', () => {
        expect(day6_1(input)).toBe(800280);
    });

    test('Part 2, example 1', () => {
        expect(day6_2(sample)).toBe(71503);
    });

    test('Part 2, puzzle input', () => {
        expect(day6_2(input)).toBe(45128024);
    });
});
