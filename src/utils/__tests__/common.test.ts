import { Tehai } from "@/types";
import {
  FisherYatesShuffle,
  getCardsMap,
  random0toXBelow,
  random1tox,
  sortMJFn,
} from "../common";
import { PIN_FU_TEHAI } from "./fixtures";
import { SORT_CASE } from "./fixtures/common/sort";

describe("Common utils", () => {
  let tehai: Tehai;

  beforeEach(() => {
    tehai = [...PIN_FU_TEHAI] as Tehai;
  });

  describe("random0toXBelow 随机数[0, x)", () => {
    it("[0,10)", () => {
      expect(random0toXBelow(10)).toBeLessThan(10);
      expect(random0toXBelow(10)).toBeGreaterThanOrEqual(0);
    });
  });

  describe("random1tox 随机数[1, x]", () => {
    it("[1,10]", () => {
      expect(random1tox(10)).toBeLessThanOrEqual(10);
      expect(random1tox(10)).toBeGreaterThanOrEqual(1);
    });
  });

  describe("getCardsMap 生成牌的哈希表", () => {
    it("平和手牌两张7m一张1m没有字牌", () => {
      const map = getCardsMap(tehai);
      expect([...map.keys()]).toEqual([...new Set(tehai)]);
      expect(map.get("7m")).toBe(2);
      expect(map.get("1m")).toBe(1);
      expect(map.has("1z")).toBeFalsy();
    });
  });

  describe.each(SORT_CASE)("sortMJFn 牌排序", ({ desc, input, output }) => {
    it(desc, () => {
      expect(input.sort(sortMJFn)).toEqual(output);
    });
  });

  describe("FisherYatesShuffle 洗牌", () => {
    it("平和手牌洗牌", () => {
      expect(FisherYatesShuffle(tehai)).not.toEqual(PIN_FU_TEHAI);
    });
  });
});
