import { ECardTypes, IYakuInfo } from "./types";

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

export const YAKU: Record<string, IYakuInfo> = {
  // === 1番役 ===
  riichi: { isYakuman: false, han: 1 }, // 立直
  ippatsu: { isYakuman: false, han: 1 }, // 一发
  menzenTsumo: { isYakuman: false, han: 1 }, // 门前清自摸
  tanyao: { isYakuman: false, han: 1 }, // 断幺九
  pinfu: { isYakuman: false, han: 1 }, // 平和
  iipeiko: { isYakuman: false, han: 1 }, // 一杯口
  rinshanKaihou: { isYakuman: false, han: 1 }, // 岭上开花
  haiteiRaoyue: { isYakuman: false, han: 1 }, // 海底摸月
  houteiRaoyui: { isYakuman: false, han: 1 }, // 河底捞鱼
  robbingAKan: { isYakuman: false, han: 1 }, // 抢杠

  // === 2番役 ===
  sanshokuDoujun: { isYakuman: false, han: 2 }, // 三色同顺
  ikkitsuukan: { isYakuman: false, han: 2 }, // 一气通贯
  chiitoitsu: { isYakuman: false, han: 2 }, // 七对子
  honchantaiyaochuu: { isYakuman: false, han: 2 }, // 混全带幺九
  sanankou: { isYakuman: false, han: 2 }, // 三暗刻
  shousangen: { isYakuman: false, han: 2 }, // 小三元
  honroutou: { isYakuman: false, han: 2 }, // 混老头
  toitoi: { isYakuman: false, han: 2 }, // 对对和
  sanshokuDoukou: { isYakuman: false, han: 2 }, // 三色同刻

  // === 3~6番役 ===
  ryanpeikou: { isYakuman: false, han: 3 }, // 二杯口
  junchanTaiyaochuu: { isYakuman: false, han: 3 }, // 纯全带幺九
  honitsu: { isYakuman: false, han: 3 }, // 混一色
  chinitsu: { isYakuman: false, han: 6 }, // 清一色

  // === 役满（isYakuman: true，han可省略） ===
  tenhou: { isYakuman: true }, // 天和
  chiihou: { isYakuman: true }, // 地和
  suuankou: { isYakuman: true }, // 四暗刻
  kokushiMusou: { isYakuman: true }, // 国士无双
  daisangen: { isYakuman: true }, // 大三元
  shousuushii: { isYakuman: true }, // 小四喜
  daisuushii: { isYakuman: true }, // 大四喜
  tsuuiisou: { isYakuman: true }, // 字一色
  ryuuiisou: { isYakuman: true }, // 绿一色
  chinroutou: { isYakuman: true }, // 清老头
  chuurenPoutou: { isYakuman: true }, // 九莲宝灯
  suukantsu: { isYakuman: true }, // 四杠子

  // === 特殊（非役但影响分数）===
  dora: { isYakuman: false, han: 1 }, // 宝牌（需动态计算）
  uraDora: { isYakuman: false, han: 1 }, // 里宝牌
  redDora: { isYakuman: false, han: 1 }, // 赤宝牌
};

// 幺九牌（1和9的数牌 + 所有字牌）
export const YAO_CHUU_CARDS: string[] = [
  // 万子（m）
  "1m",
  "9m",
  // 筒子（p）
  "1p",
  "9p",
  // 索子（s）
  "1s",
  "9s",
  // 字牌（z）
  "1z",
  "2z",
  "3z",
  "4z",
  "5z",
  "6z",
  "7z", // 1z=东, 2z=南, 3z=西, 4z=北, 5z=白, 6z=发, 7z=中
];

// 非幺九牌（2~8的数牌）
export const NON_YAO_CHUU_CARDS: string[] = [
  // 万子（m）
  "2m",
  "3m",
  "4m",
  "5m",
  "6m",
  "7m",
  "8m",
  // 筒子（p）
  "2p",
  "3p",
  "4p",
  "5p",
  "6p",
  "7p",
  "8p",
  // 索子（s）
  "2s",
  "3s",
  "4s",
  "5s",
  "6s",
  "7s",
  "8s",
];
