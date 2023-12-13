import { puzzle } from '.';

describe('Day 2', () => {
  it('should return game id', () => {
    expect(puzzle('Game 5: 1 blue')).toBe(5);
  });

  it('should return 0 if red > 12 in a set', () => {
    expect(puzzle('Game 5: 13 red, 1 blue, 3 green')).toBe(0);
  });

  it('should return game id if set is valid', () => {
    expect(puzzle('Game 4: 1 blue, 3 green, 5 red')).toBe(4);
  });

  it('should check all sets', () => {
    expect(
      puzzle('Game 4: 1 blue, 3 green, 5 red; 20 blue, 3 green, 5 red')
    ).toBe(0);
  });

  it('should sum up all valid game ids', () => {
    expect(
      puzzle(
        'Game 4: 1 blue, 3 green, 5 red; 11 blue, 3 green, 5 red\nGame 5: 1 blue'
      )
    ).toBe(9);
  });
});

//Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
