import { Tehai, TehaiAfterDraw } from "@/types";

export const PIN_FU_TEHAI_CONFIG = {
  name: "平和听牌手牌",
  value: [
    "1m",
    "2m",
    "3m",
    "4p",
    "5p",
    "6p",
    "7s",
    "8s",
    "9s",
    "4m",
    "5m",
    "7m",
    "7m",
  ] as Tehai,
};

export const PIN_FU_TEHAI_AFTER_DRAW_CAN_WIN_CONFIG = {
  name: "平和和牌手牌",
  value: [...PIN_FU_TEHAI_CONFIG.value, "3m"] as TehaiAfterDraw,
};

export const PIN_FU_TEHAI_AFTER_DRAW_CAN_NOT_WIN_CONFIG = {
  name: "平和未和牌手牌",
  value: [...PIN_FU_TEHAI_CONFIG.value, "3p"] as TehaiAfterDraw,
};

export const CHIITOITSU_TEHAI_CONFIG = {
  name: "七对子听牌手牌",
  value: [
    "1m",
    "1m",
    "3p",
    "3p",
    "5s",
    "5s",
    "1z",
    "1z",
    "3z",
    "3z",
    "5z",
    "5z",
    "7z",
  ] as Tehai,
};

export const CHIITOITSU_TEHAI_AFTER_DRAW_CAN_WIN_CONFIG = {
  name: "七对子和牌手牌",
  value: [...CHIITOITSU_TEHAI_CONFIG.value, "7z"] as TehaiAfterDraw,
};

export const CHIITOITSU_TEHAI_AFTER_DRAW_CAN_NOT_WIN_CONFIG = {
  name: "七对子未和牌手牌",
  value: [...CHIITOITSU_TEHAI_CONFIG.value, "6z"] as TehaiAfterDraw,
};

export const HONITSU_TEHAI_CONFIG = {
  name: "混一色听牌手牌",
  value: [
    "1m",
    "2m",
    "3m",
    "6m",
    "6m",
    "7m",
    "8m",
    "9m",
    "1z",
    "1z",
    "1z",
    "3z",
    "3z",
  ] as Tehai,
};

export const HONITSU_TEHAI_AFTER_DRAW_CAN_WIN_CONFIG = {
  name: "混一色和牌手牌",
  value: [...HONITSU_TEHAI_CONFIG.value, "3z"] as TehaiAfterDraw,
};

export const HONITSU_TEHAI_AFTER_DRAW_CAN_NOT_WIN_CONFIG = {
  name: "混一色未和牌手牌",
  value: [...HONITSU_TEHAI_CONFIG.value, "1p"] as TehaiAfterDraw,
};

export const KOKUSHI_MUSOU_13_WAIT_TEHAI_CONFIG = {
  name: "国士无双十三面听牌手牌",
  value: [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z",
  ] as Tehai,
};

export const KOKUSHI_MUSOU_13_WAIT_TEHAI_AFTER_DRAW_CAN_WIN_CONFIG = {
  name: "国士无双十三面和牌手牌",
  value: [...KOKUSHI_MUSOU_13_WAIT_TEHAI_CONFIG.value, "1m"] as TehaiAfterDraw,
};

export const KOKUSHI_MUSOU_13_WAIT_TEHAI_AFTER_DRAW_CAN_NOT_WIN_CONFIG = {
  name: "国士无双十三面未和牌手牌",
  value: [...KOKUSHI_MUSOU_13_WAIT_TEHAI_CONFIG.value, "2m"] as TehaiAfterDraw,
};

export const TRUE_CHUUREN_TEHAI_CONFIG = {
  name: "纯正九莲宝灯听牌手牌",
  value: [
    "1m",
    "1m",
    "1m",
    "2m",
    "3m",
    "4m",
    "5m",
    "6m",
    "7m",
    "8m",
    "9m",
    "9m",
    "9m",
  ] as Tehai,
};

export const TRUE_CHUUREN_TEHAI_AFTER_DRAW_CAN_WIN_CONFIG = {
  name: "纯正九莲宝灯和牌手牌",
  value: [...TRUE_CHUUREN_TEHAI_CONFIG.value, "1m"] as TehaiAfterDraw,
};

export const TRUE_CHUUREN_TEHAI_AFTER_DRAW_CAN_NOT_WIN_CONFIG = {
  name: "纯正九莲宝灯未和牌手牌",
  value: [...TRUE_CHUUREN_TEHAI_CONFIG.value, "1p"] as TehaiAfterDraw,
};

export const TEN_PAI_EDGE_TEHAI_CONFIG = {
  name: "一向听手牌",
  value: [
    "1m",
    "2m",
    "3m",
    "4p",
    "5p",
    "6p",
    "7s",
    "8s",
    "1z",
    "1z",
    "3z",
    "3z",
    "5z",
  ] as Tehai,
};

export const NO_TEN_TEHAI_CONFIG = {
  name: "未听牌手牌",
  value: [
    "1m",
    "2m",
    "4m",
    "5p",
    "6p",
    "8p",
    "1s",
    "3s",
    "5s",
    "1z",
    "2z",
    "3z",
    "5z",
  ] as Tehai,
};
