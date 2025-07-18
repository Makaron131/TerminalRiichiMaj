export const random1tox = (n: number) => {
  return Math.floor(Math.random() * n) + 1;
};

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
