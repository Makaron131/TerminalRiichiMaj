import { ECardTypes } from "./types";

export enum NumberCardTypes {
  P = "p",
  S = "s",
  M = "m",
}

export enum JihaiCardType {
  Z = "z",
}

export const CardTypes = { ...NumberCardTypes, ...JihaiCardType };

export const PAIR_LENGTH = 2;
export const SEQUENCE_LENGTH = 3;
export const TRIPLET_LENGTH = 3;
export const NUMBER_CARD_TYPE_COUNT = Object.keys(NumberCardTypes).length;
export const JIHAI_CARD_TYPE_COUNT = Object.keys(JihaiCardType).length;
export const CARD_TYPES_LENGTH = Object.keys(CardTypes).length;
export const SINGLE_CARD_MAX_COUNT = 4;
export const JIHAI_COUNT = 7;
export const NUMBER_CARD_COUNT = 9;
export const TEHAI_LENGTH = 13;
export const TEHAI_AFTER_DRAW_LENGTH = 14;

export const EACH_TYPE_NUMBER_CARD_TOTAL_COUNT =
  NUMBER_CARD_COUNT * SINGLE_CARD_MAX_COUNT;
export const JI_HAI_TOTAL_COUNT = SINGLE_CARD_MAX_COUNT * JIHAI_COUNT;

export const DEAD_WALL_LENGTH = 14;
export const DORA_INDICATOR_POSITION = DEAD_WALL_LENGTH - 5;

const generateSingleTypeAllCards = (type: ECardTypes) => {
  const cardTotalCount =
    type === CardTypes.Z
      ? JI_HAI_TOTAL_COUNT
      : EACH_TYPE_NUMBER_CARD_TOTAL_COUNT;

  return new Array(cardTotalCount)
    .fill(0)
    .map(
      (_, index) => `${Math.floor(index / SINGLE_CARD_MAX_COUNT) + 1}${type}`
    );
};

export const DEFAULT_ALL_CARDS: string[] = [
  // 万子: 1m~9m，各4张
  ...generateSingleTypeAllCards(CardTypes.M),
  // 筒子: 1p~9p，各4张
  ...generateSingleTypeAllCards(CardTypes.P),
  // 索子: 1s~9s，各4张
  ...generateSingleTypeAllCards(CardTypes.S),
  // 字牌: 1z~7z，各4张
  // 顺序：东(East)、南(South)、西(West)、北(North)、白(White)、发(Green)、中(Red)
  ...generateSingleTypeAllCards(CardTypes.Z),
];
