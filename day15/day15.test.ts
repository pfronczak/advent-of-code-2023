import { readFileSync } from 'fs';
import { day15_1, day15_2 } from './day15';

const sample = readFileSync('day15/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

const input = readFileSync('day15/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 15: Lens Library', () => {
    test('Part 1, example 1', () => {
        expect(day15_1(sample)).toBe(1320);
    });

    test('Part 1, puzzle input', () => {
        expect(day15_1(input)).toBe(504449);
    });

    test('Part 2, example 1', () => {
        expect(day15_2(sample)).toBe(145);
    });

    test('Part 2, puzzle input', () => {
        expect(day15_2(input)).toBe(262044);
    });
});
