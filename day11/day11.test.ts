import { readFileSync } from 'fs';
import { day11_1, day11_2 } from './day11';

const sample = readFileSync('day11/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

const input = readFileSync('day11/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 11: Cosmic Expansion', () => {
    test('Part 1, example 1', () => {
        expect(day11_1(sample)).toBe(374);
    });

    test('Part 1, puzzle input', () => {
        expect(day11_1(input)).toBe(9605127);
    });

    test('Part 2, example 1', () => {
        expect(day11_2(sample)).toBe(82000210);
    });

    test('Part 2, puzzle input', () => {
        expect(day11_2(input)).toBe(458191688761);
    });
});
