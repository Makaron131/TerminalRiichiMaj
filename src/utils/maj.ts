import {
  CARD_TYPES_LENGTH,
  CardTypes,
  JIHAI_COUNT,
  JihaiCardType,
  NUMBER_CARD_COUNT,
  NUMBER_CARD_TYPE_COUNT,
  NumberCardTypes,
  PAIR_LENGTH,
  SEQUENCE_LENGTH,
  SINGLE_CARD_MAX_COUNT,
  TEHAI_AFTER_DRAW_LENGTH,
  TEHAI_LENGTH,
  YAO_CHUU_CARDS,
} from "@/constants";
import { Pair, Sequence, Tehai, TehaiAfterDraw } from "@/types";
import {
  findFirstSingleCard,
  getCardsMap,
  random1tox,
  sortMJFn,
} from "./common";

export const isTehaiAfterDraw = (tehai: string[]): tehai is TehaiAfterDraw =>
  tehai.length === TEHAI_AFTER_DRAW_LENGTH;

export const isTehai = (tehai: string[]): tehai is Tehai =>
  tehai.length === TEHAI_LENGTH;

const generateSingleCard = () => {
  const CARD_TYPE = Object.values(CardTypes);
  const type = CARD_TYPE[random1tox(CARD_TYPES_LENGTH) - 1];

  const num =
    type === CardTypes.Z
      ? random1tox(JIHAI_COUNT)
      : random1tox(NUMBER_CARD_COUNT);

  return `${num}${type}`;
};

export const draw = (tehai: string[]) => {
  const cardsMap = getCardsMap(tehai);

  let card;
  while (!card || cardsMap.get(card) >= SINGLE_CARD_MAX_COUNT) {
    card = generateSingleCard();
    if (!cardsMap.has(card)) {
      cardsMap.set(card, 0);
    }
  }

  return card;
};

const generateMJCards = (count: number) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    const card = draw(cards);
    cards.push(card);
  }

  return cards.sort(sortMJFn);
};

export const generateTehaiAfterDraw = () =>
  generateMJCards(TEHAI_AFTER_DRAW_LENGTH) as TehaiAfterDraw;

export const generateInitialTehai = () =>
  generateMJCards(TEHAI_LENGTH) as Tehai;

const isSequence = (partOfCards: Sequence) =>
  partOfCards[0][1] !== CardTypes.Z &&
  partOfCards[1][1] !== CardTypes.Z &&
  partOfCards[2][1] !== CardTypes.Z &&
  partOfCards[0][1] === partOfCards[1][1] &&
  partOfCards[1][1] === partOfCards[2][1] &&
  parseInt(partOfCards[2][0]) - parseInt(partOfCards[1][0]) === 1 &&
  parseInt(partOfCards[1][0]) - parseInt(partOfCards[0][0]) === 1;

const isTriplet = (partOfCards: Sequence) =>
  partOfCards[0] === partOfCards[1] && partOfCards[1] === partOfCards[2];

const isHead = (pair: Pair) => pair[0] === pair[1];

const takeAllHeadCombination = (cards: TehaiAfterDraw) => {
  const result = [];

  for (let i = 0; i < cards.length; i++) {
    const pair: Pair = [cards[i], cards[i + 1]];
    if (isHead(pair)) {
      const tmp = [...cards];
      tmp.splice(i, PAIR_LENGTH);
      result.push({ head: pair, otherCards: tmp });
    }
  }

  return result;
};

export const canWin = (tehaiAfterDraw: TehaiAfterDraw) => {
  const newTehaiAfterDraw = [...tehaiAfterDraw] as TehaiAfterDraw;

  if (isChiitoitsu(newTehaiAfterDraw)) return true;

  // 排序
  const tehaiAfterDrawAndSort = newTehaiAfterDraw.sort(sortMJFn);

  // 1. 取雀头，没有取到说明缺雀头
  const result = takeAllHeadCombination(tehaiAfterDrawAndSort);

  for (let j = 0; j < result.length; j++) {
    const otherCards = result[j].otherCards;
    // 因为是有序的，只要符合顺子或者刻子，就能胡牌
    for (let i = 0; i < otherCards.length; i += SEQUENCE_LENGTH) {
      const sequence: Sequence = [
        otherCards[i],
        otherCards[i + 1],
        otherCards[i + 2],
      ];

      if (!isSequence(sequence) && !isTriplet(sequence)) {
        return false;
      }
    }

    // console.log("can win", result[j]);
    return true;
  }

  return false;
};

export const tenPai = (tehai: Tehai): string[] => {
  if (isChiitoitsuTenPai(tehai)) {
    return findFirstSingleCard(tehai);
  }

  const tenPaiCards = [];

  const numberCardTypes = Object.values(NumberCardTypes);

  const tehaiMap = getCardsMap(tehai);

  for (let i = 1; i <= NUMBER_CARD_COUNT; i++) {
    for (let j = 0; j < NUMBER_CARD_TYPE_COUNT; j++) {
      const card = `${i}${numberCardTypes[j]}`;
      if (!tehaiMap.has(card)) {
        const newTehai: TehaiAfterDraw = [...tehai, card];
        if (canWin(newTehai)) {
          tenPaiCards.push(card);
        }
      } else if (tehaiMap.get(card) > SINGLE_CARD_MAX_COUNT) {
        continue;
      }
    }
  }

  for (let i = 1; i <= JIHAI_COUNT; i++) {
    const card = `${i}${JihaiCardType.Z}`;
    if (!tehaiMap.has(card)) {
      const newTehai: TehaiAfterDraw = [...tehai, card];
      if (canWin(newTehai)) {
        tenPaiCards.push(card);
      }
    } else if (tehaiMap.get(card) > SINGLE_CARD_MAX_COUNT) {
      continue;
    }
  }

  return tenPaiCards;
};

export const isChiitoitsuTenPai = (tehai: Tehai) => {
  return new Set(tehai).size === 7;
};

export const isChiitoitsu = (tehaiAfterDraw: TehaiAfterDraw) => {
  return (
    tehaiAfterDraw.length === TEHAI_AFTER_DRAW_LENGTH &&
    new Set(tehaiAfterDraw).size === 7
  );
};

export const isKokushiMusou = (tehaiAfterDrawAndSort: TehaiAfterDraw) => {
  return (
    tehaiAfterDrawAndSort.every((v) => YAO_CHUU_CARDS.includes(v)) &&
    new Set(tehaiAfterDrawAndSort).size === 13
  );
};

export const isYakuman = (tehaiAfterDrawAndSort: TehaiAfterDraw) => {
  // 1. 国士
  if (isKokushiMusou(tehaiAfterDrawAndSort)) {
    return true;
  }
};

export const checkYaku = (tehaiAfterDraw: TehaiAfterDraw) => {
  const tehaiAfterDrawAndSort = [...tehaiAfterDraw].sort(
    sortMJFn
  ) as TehaiAfterDraw;
  return isYakuman(tehaiAfterDrawAndSort);
};
