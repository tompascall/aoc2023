import { getPuzzle } from '../utils/get-puzzle';

export const puzzle = (text: string) => {
  return text;
};

const main = async () => {
  const solution = puzzle(
    await getPuzzle('https://adventofcode.com/2023/day/1/input')
  );
  console.log(solution);
};

if (require.main === module) {
  main();
} else {
  console.log('not main');
}
