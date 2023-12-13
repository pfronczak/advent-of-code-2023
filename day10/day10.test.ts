import { readFileSync } from 'fs';
import { day10_1, day10_2 } from './day10';

const sample = readFileSync('day10/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample2 = readFileSync('day10/sample2.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample3 = readFileSync('day10/sample3.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample4 = readFileSync('day10/sample4.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample5 = readFileSync('day10/sample5.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample6 = readFileSync('day10/sample6.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

const input = readFileSync('day10/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 10: Pipe Maze', () => {
    test('Part 1, example 1', () => {
        expect(day10_1(sample)).toBe(4);
    });

    test('Part 1, example 2', () => {
        expect(day10_1(sample2)).toBe(8);
    });

    test('Part 1, puzzle input', () => {
        expect(day10_1(input)).toBe(6815);
    });

    test('Part 2, example 1', () => {
        expect(day10_2(sample3)).toBe(4);
    });

    test('Part 2, example 2', () => {
        expect(day10_2(sample4)).toBe(4);
    });

    test('Part 2, example 3', () => {
        expect(day10_2(sample5)).toBe(8);
    });

    test('Part 2, example 4', () => {
        expect(day10_2(sample6)).toBe(10);
    });

    test('Part 2, puzzle input', () => {
        expect(day10_2(input)).toBe(269);
    });
});
