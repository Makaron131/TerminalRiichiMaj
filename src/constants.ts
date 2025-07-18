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
