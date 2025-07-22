import {
  FisherYatesShuffle,
  getCardsMap,
  random0toXBelow,
  random1tox,
  sortMJFn,
} from "../common";

describe("Common utils", () => {
  const DEFAULT_CARDS = ["1m", "2m", "3m", "1m", "1p", "1z", "2s"];
  let cards: string[];

  beforeEach(() => {
    cards = [...DEFAULT_CARDS];
  });

  it("random0toXBelow 随机数[0, x)", () => {
    expect(random0toXBelow(10)).toBeLessThan(10);
    expect(random0toXBelow(10)).toBeGreaterThanOrEqual(0);
  });

  it("random1tox 随机数[1, x]", () => {
    expect(random1tox(10)).toBeLessThanOrEqual(10);
    expect(random1tox(10)).toBeGreaterThanOrEqual(0);
  });

  it("getCardsMap 生成牌的哈希表", () => {
    const map = getCardsMap(cards);
    expect([...map.keys()]).toEqual([...new Set(cards)]);
    expect(map.get("1m")).toBe(2);
    expect(map.get("1z")).toBe(1);
    expect(map.has("4m")).toBeFalsy();
  });

  it("sortMJFn 牌排序", () => {
    const SORTED_CARDS = ["1m", "1m", "2m", "3m", "1p", "2s", "1z"];

    expect(cards.sort(sortMJFn)).toEqual(SORTED_CARDS);
  });

  it("FisherYatesShuffle 洗牌", () => {
    expect(FisherYatesShuffle(cards)).not.toEqual(DEFAULT_CARDS);
  });
});
