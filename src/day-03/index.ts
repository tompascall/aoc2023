import { getPuzzle } from '../utils/get-puzzle';
import { getLines } from '../utils/parse';

const isSymbol = (char: string) => /[*$#@=%+\-&\/]/.test(char);

export const findNextNumber = (
  line: string,
  index: number = line.length - 1
) => {
  let nextNumber: number | string | undefined;
  let nextIndex: number;

  for (nextIndex = index; nextIndex >= 0; nextIndex--) {
    const char = line.charAt(nextIndex);
    if (char === '.' || isSymbol(char)) {
      if (nextNumber !== undefined) {
        return { number: parseInt(`${nextNumber}`), index: nextIndex + 1 };
      }
      continue;
    }

    if (nextNumber === undefined) {
      nextNumber = char;
      continue;
    }
    nextNumber = `${char}${nextNumber}`;
  }
  return {
    number: nextNumber === undefined ? undefined : parseInt(`${nextNumber}`),
    index: 0,
  };
};

export const isAdjacentToSymbol = ({
  lines,
  lineNum,
  index,
  number,
}: {
  lines: string[];
  lineNum: number;
  index: number;
  number: number;
}) => {
  const numberLength = `${number}`.length;
  const line = lines[lineNum];
  const prevLine = lines[lineNum - 1];
  const nextLine = lines[lineNum + 1];

  if (
    isSymbol(line.charAt(index - 1)) ||
    isSymbol(line.charAt(index + numberLength))
  ) {
    return true;
  }

  const startIndex = index - 1 >= 0 ? index - 1 : 0;
  const endIndex =
    index + numberLength <= line.length - 1
      ? index + numberLength
      : line.length - 1;

  if (prevLine) {
    for (let i = startIndex; i <= endIndex; i++) {
      if (isSymbol(prevLine.charAt(i))) {
        return true;
      }
    }
  }

  if (nextLine) {
    for (let i = startIndex; i <= endIndex; i++) {
      if (isSymbol(nextLine.charAt(i))) {
        return true;
      }
    }
  }
  return false;
};

export const puzzle = (text: string) => {
  const lines = getLines(text);
  return lines.reduce((acc, line, lineNum) => {
    let currentIndex = line.length - 1;
    while (currentIndex >= 0) {
      const { number, index } = findNextNumber(line, currentIndex);
      if (number !== undefined) {
        if (isAdjacentToSymbol({ lines, lineNum, index, number })) {
          acc += number;
        } else {
          console.log('not adjacent', number, lineNum, index);
        }
      }
      currentIndex = index - 1;
    }
    return acc;
  }, 0);
};

const main = async () => {
  const solution = puzzle(
    await getPuzzle('https://adventofcode.com/2023/day/3/input')
  );
  console.log(solution);
};

if (require.main === module) {
  main();
}
