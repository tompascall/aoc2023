// fetch a plain text document from the given url

export const getPuzzle = async (url: string): Promise<string> => {
  const response = await fetch(url, {
    headers: {
      cookie: `session=${process.env.AOC_SESSION_COOKIE}`,
    },
  });

  if (response.status === 200) {
    return response.text();
  } else {
    console.log(response.status, response.statusText);
    throw new Error('Unable to fetch puzzle');
  }
};
