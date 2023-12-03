import { readFileSync } from 'fs';
import { day3_1, day3_2 } from './day3';

const sample = readFileSync('day03/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const input = readFileSync('day03/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 3: Gear Ratios', () => {
    test('Part 1, example 1', () => {
        expect(day3_1(sample)).toBe(4361);
    });

    test('Part 1, puzzle input', () => {
        expect(day3_1(input)).toBe(521515);
    });

    test('Part 2, example 1', () => {
        expect(day3_2(sample)).toBe(467835);
    });

    test('Part 2, puzzle input', () => {
        expect(day3_2(input)).toBe(69527306);
    });
});
