import { readFileSync } from 'fs';
import { day4_1, day4_2 } from './day4';

const sample = readFileSync('day04/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const input = readFileSync('day04/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 4: Scratchcards', () => {
    test('Part 1, example 1', () => {
        expect(day4_1(sample)).toBe(13);
    });

    test('Part 1, puzzle input', () => {
        expect(day4_1(input)).toBe(25174);
    });

    test('Part 2, example 1', () => {
        expect(day4_2(sample)).toBe(30);
    });

    test('Part 2, puzzle input', () => {
        expect(day4_2(input)).toBe(6420979);
    });
});
