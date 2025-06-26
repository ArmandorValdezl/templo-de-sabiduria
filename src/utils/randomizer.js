export function getRandomQuote(quotesArray, lastQuote = null) {
  if (!quotesArray || quotesArray.length === 0) return null;

  let newQuote;
  do {
    const index = Math.floor(Math.random() * quotesArray.length);
    newQuote = quotesArray[index];
  } while (lastQuote && newQuote.text === lastQuote.text); // Evita repetición

  return newQuote;
}
