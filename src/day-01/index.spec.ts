import { puzzle } from '.';

describe('Day 1', () => {
  it('should return 11 for 1', () => {
    expect(puzzle('1')).toEqual(11);
  });

  it('should return 11 for a1', () => {
    expect(puzzle('a1')).toEqual(11);
  });

  it('should return 12 for a1b2', () => {
    expect(puzzle('a1b2')).toEqual(12);
  });

  it('should return 15 for a1b2c3d4e5f', () => {
    expect(puzzle('a1b2c3d4e5f')).toEqual(15);
  });

  it('should add result of lines (15 + 12)', () => {
    expect(puzzle('a1b2c3d4e5f\na1b2')).toEqual(27);
  });

  it('should return 0 for no match', () => {
    expect(puzzle('asdf')).toEqual(0);
  });

  [
    ['two1nine', 29],
    ['eightwothree', 83],
    ['abcone2threexyz', 13],
    ['xtwone3four', 24],
    ['4nineeightseven2', 42],
    ['zoneight234', 14],
    ['7pqrstsixteen', 76],
  ].forEach(([line, result]) => {
    it(`should parse correctly ${line} to ${result}`, () => {
      expect(puzzle(line as string)).toEqual(result);
    });
  });
});

it('should return 18 for oneight', () => {
  expect(puzzle('oneight')).toEqual(18);
});
