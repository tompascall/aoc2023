import { getPuzzle } from '../utils/get-puzzle';
import { getLines } from '../utils/parse';

type colors = 'red' | 'green' | 'blue';

const getLineResult = (line: string) => {
  const [_, tail] = line.split(':');
  if (!tail) {
    return 0;
  }
  const sets = tail.split(';');

  const maxColors = sets.reduce(
    (maxColors, set) => {
      set
        .trim()
        .split(',')
        .forEach((item) => {
          const [count, color] = item.trim().split(' ') as [string, colors];
          if (maxColors[color] < parseInt(count)) {
            maxColors[color] = parseInt(count);
          }
        });
      return maxColors;
    },
    { red: 1, green: 1, blue: 1 }
  );

  return Object.values(maxColors).reduce((acc, value) => acc * value, 1);
};

export const puzzle = (text: string) => {
  const lines = getLines(text);
  return lines.reduce((acc, line) => {
    const result = getLineResult(line);
    return acc + result;
  }, 0);
};

const main = async () => {
  const solution = puzzle(
    await getPuzzle('https://adventofcode.com/2023/day/2/input')
  );
  console.log(solution);
};

if (require.main === module) {
  main();
}
