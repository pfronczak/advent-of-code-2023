import { readFileSync } from 'fs';
import { day10_1, day10_2 } from './day10';

const sample = readFileSync('day10/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());
const sample2 = readFileSync('day10/sample2.txt', 'utf8')
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

    // test('Part 2, example 1', () => {
    //     expect(day10_2(sample)).toBe(0);
    // });

    // test('Part 2, puzzle input', () => {
    //     expect(day10_2(input)).toBe(0);
    // });
});
