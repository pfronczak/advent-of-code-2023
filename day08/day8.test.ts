import { readFileSync } from 'fs';
import { day8_1, day8_2 } from './day8';

const sample = readFileSync('day08/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample2 = readFileSync('day08/sample2.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample3 = readFileSync('day08/sample3.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
    
const input = readFileSync('day08/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 8: Haunted Wasteland', () => {
    test('Part 1, example 1', () => {
        expect(day8_1(sample)).toBe(2);
    });

    test('Part 1, example 1', () => {
        expect(day8_1(sample2)).toBe(6);
    });

    test('Part 1, puzzle input', () => {
        expect(day8_1(input)).toBe(24253);
    });

    test('Part 2, example 1', () => {
        expect(day8_2(sample3)).toBe(6);
    });

    test('Part 2, puzzle input', () => {
        expect(day8_2(input)).toBe(12357789728873);
    });
});
