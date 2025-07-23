export const random1tox = (n: number) => random0toXBelow(n) + 1;

export const random0toXBelow = (n: number) => Math.floor(Math.random() * n);

export const getCardsMap = (cards: string[]) => {
  const cardsMap = new Map();
  cards.forEach((card) => {
    if (!cardsMap.has(card)) {
      cardsMap.set(card, 0);
    }
    cardsMap.set(card, cardsMap.get(card) + 1);
  });

  return cardsMap;
};

export const sortMJFn = (a: string, b: string) => {
  const typeCompare = a.charCodeAt(1) - b.charCodeAt(1);
  if (typeCompare !== 0) {
    return typeCompare;
  }

  return a.charCodeAt(0) - b.charCodeAt(0);
};

export const FisherYatesShuffle = (cards: string[]) => {
  const result = [...cards];

  for (let i = result.length - 1; i > 0; i--) {
    const x = random0toXBelow(i + 1);
    [result[i], result[x]] = [result[x], result[i]];
  }

  return result;
};

export const findFirstSingleCard = (cards: string[]) => {
  const map = new Map();
  cards.forEach((card) => map.set(card, (map.get(card) || 0) + 1));
  for (let [card, count] of map) {
    if (count === 1) return card;
  }
};
