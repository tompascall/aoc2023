import { puzzle } from '.';

describe('Day 2', () => {
  it('should return 13 if for Game 5: 13 red in a set', () => {
    expect(puzzle('Game 5: 13 red')).toBe(13);
  });

  // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  it('should return 48', () => {
    expect(
      puzzle('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
    ).toBe(48);
  });

  fit('should return 2286', () => {
    expect(
      puzzle(
        'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n' +
          'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n' +
          'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n' +
          'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n' +
          'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green\n'
      )
    ).toBe(2286);
  });
});
