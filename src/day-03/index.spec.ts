import { puzzle, findNextNumber, isAdjacentToSymbol } from '.';

describe('Day 3', () => {
  it('should find next number in line', () => {
    expect(findNextNumber('467..114..')).toEqual({ number: 114, index: 5 });
    expect(findNextNumber('467..114')).toEqual({ number: 114, index: 5 });
    expect(findNextNumber('467.....')).toEqual({ number: 467, index: 0 });
    expect(findNextNumber('467...&.')).toEqual({ number: 467, index: 0 });
    expect(findNextNumber('&467...&.')).toEqual({ number: 467, index: 1 });
    expect(findNextNumber('467..114..', 7)).toEqual({ number: 114, index: 5 });
    expect(findNextNumber('467..114..', 4)).toEqual({ number: 467, index: 0 });
    expect(findNextNumber('....', 3)).toEqual({ number: undefined, index: 0 });
    expect(findNextNumber('..700..')).toEqual({ number: 700, index: 2 });
  });

  it('should check if number is adjacent to symbol -  same line', () => {
    let lines = ['467..114*.'];
    console.log(findNextNumber(lines[0]));
    expect(
      isAdjacentToSymbol({ lines, lineNum: 0, index: 5, number: 114 })
    ).toBe(true);
    expect(
      isAdjacentToSymbol({ lines, lineNum: 0, index: 0, number: 467 })
    ).toBe(false);

    lines = ['%467....'];

    expect(
      isAdjacentToSymbol({ lines, lineNum: 0, index: 1, number: 467 })
    ).toBe(true);
  });

  it('should check if number is adjacent to symbol -  next line', () => {
    const lines = ['467..114..', '...*......'];
    expect(
      isAdjacentToSymbol({ lines, lineNum: 0, index: 5, number: 114 })
    ).toBe(false);
    expect(
      isAdjacentToSymbol({ lines, lineNum: 0, index: 0, number: 467 })
    ).toBe(true);
  });

  it('should check if number is adjacent to symbol -  prev line', () => {
    const lines = ['...*......', '467..114..'];
    expect(
      isAdjacentToSymbol({ lines, lineNum: 0, index: 5, number: 114 })
    ).toBe(false);
    expect(
      isAdjacentToSymbol({ lines, lineNum: 0, index: 0, number: 467 })
    ).toBe(true);
  });

  it('should sum up all numbers that has adjacent symbols', () => {
    let lines = ['467..114..', '...*......'].join('\n');
    expect(puzzle(lines)).toBe(467);
    lines = [
      '467..114..',
      '...*......',
      '..35..633.',
      '......#...',
      '617*......',
      '.....+.58.',
      '..592.....',
      '......755.',
      '...$.*....',
      '.664.598..',
    ].join('\n');
    expect(puzzle(lines)).toBe(4361);
    lines = [
      '.............65..................998.........453...................................845..773.........................307....527...........541',
      '............*..........125.......*...331......*.....................30.76......./...*....*..861.......*.........298*......*.........700.....',
    ].join('\n');
    expect(puzzle(lines)).toBe(4266);
  });
});
