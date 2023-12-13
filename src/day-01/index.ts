import { getPuzzle } from '../utils/get-puzzle';
import { getLines } from '../utils/parse';

const digitMap: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const getNumber = (text: string) => digitMap[text] || parseInt(text);

const getLineResult = (line: string) => {
  const reg = /(?=(\d{1}|one|two|three|four|five|six|seven|eight|nine))/g;
  const matches = Array.from(line.matchAll(reg), (x) => x[1]);
  const firstDigit = matches[0];
  const lastDigit = matches[matches.length - 1];
  return firstDigit && lastDigit
    ? parseInt(`${getNumber(firstDigit)}${getNumber(lastDigit)}`)
    : 0;
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
    await getPuzzle('https://adventofcode.com/2023/day/1/input')
  );
  console.log(solution);
};

if (require.main === module) {
  main();
}
