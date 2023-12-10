import { readFileSync } from 'fs';
import { day9_1, day9_2 } from './day9';

const sample = readFileSync('day09/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
    
const input = readFileSync('day09/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 9: Mirage Maintenanc', () => {
    test('Part 1, example 1', () => {
        expect(day9_1(sample)).toBe(114);
    });

    test('Part 1, puzzle input', () => {
        expect(day9_1(input)).toBe(1757008019);
    });

    test('Part 2, example 1', () => {
        expect(day9_2(sample)).toBe(2);
    });

    test('Part 2, puzzle input', () => {
        expect(day9_2(input)).toBe(995);
    });
});
