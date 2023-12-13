import { getPuzzle } from '../utils/get-puzzle';
import { getLines } from '../utils/parse';

const rules = {
  red: 12,
  green: 13,
  blue: 14,
};

const getLineResult = (line: string) => {
  // it returns game id if game is possible otherwise 0
  const [head, tail] = line.split(':');
  if (!head || !tail) {
    return 0;
  }

  const id = parseInt(head.split(' ')[1]);
  const sets = tail.split(';');
  const isValid = sets.every((set) =>
    set
      .trim()
      .split(',')
      .every((item) => {
        const [count, color] = item.trim().split(' ');
        return parseInt(count) <= rules[color as keyof typeof rules];
      })
  );
  return isValid ? id : 0;
};

export const puzzle = (text: string) => {
  const lines = getLines(text);
  return lines.reduce((acc, line, index) => {
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
