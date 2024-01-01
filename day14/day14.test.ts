import { readFileSync } from 'fs';
import { day14_1, day14_2 } from './day14';

const sample = readFileSync('day14/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

const input = readFileSync('day14/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 14: Parabolic Reflector Dish', () => {
    test('Part 1, example 1', () => {
        expect(day14_1(sample)).toBe(136);
    });

    test('Part 1, puzzle input', () => {
        expect(day14_1(input)).toBe(108955);
    });

    test('Part 2, example 1', () => {
        expect(day14_2(sample)).toBe(64);
    });

    test('Part 2, puzzle input', () => {
        expect(day14_2(input)).toBe(106689);
    });
});
