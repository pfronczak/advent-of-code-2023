import { readFileSync } from 'fs';
import { day1_1, day1_2 } from './day1';

const sample = readFileSync('day01/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample2 = readFileSync('day01/sample2.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const input = readFileSync('day01/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 1: Calorie Counting', () => {
    test('Part 1, example 1', () => {
        expect(day1_1(sample)).toBe(142);
    });

    test('Part 1, puzzle input', () => {
        expect(day1_1(input)).toBe(54953);
    });

    test('Part 2, example 1', () => {
        expect(day1_2(sample2)).toBe(281);
    });

    test('Part 2, example 2', () => {
        expect(day1_2(['eightfive37688eighteightwof'])).toBe(82);
    });

    test('Part 2, puzzle input', () => {
        expect(day1_2(input)).toBe(0);
    });
});
