import { isChiitoitsu, isChiitoitsuTenPai, isKokushiMusou } from "../maj";
import {
  IS_CHIITOITSU_CASE,
  IS_CHIITOITSU_TEN_PAI_CASE,
} from "./fixtures/maj/chiitoitsu";
import { KOKUSHI_CASE } from "./fixtures/maj/kokushi";

describe("Maj utils", () => {
  describe.each(KOKUSHI_CASE)(
    "isKokushiMusou 是否国士无双",
    ({ desc, input, output }) => {
      it(`${desc} ${output ? "和牌" : "无法和牌"}`, () => {
        output
          ? expect(isKokushiMusou(input)).toBeTruthy()
          : expect(isKokushiMusou(input)).toBeFalsy();
      });
    }
  );

  describe.each(IS_CHIITOITSU_CASE)(
    "isChiitoitsu 是否七对子和牌",
    ({ desc, input, output }) => {
      it(desc, () => {
        output
          ? expect(isChiitoitsu(input)).toBeTruthy()
          : expect(isChiitoitsu(input)).toBeFalsy();
      });
    }
  );

  describe.each(IS_CHIITOITSU_TEN_PAI_CASE)(
    "isChiitoitsuTenPai 是否七对子听牌",
    ({ desc, input, output }) => {
      it(desc, () => {
        output
          ? expect(isChiitoitsuTenPai(input)).toBeTruthy()
          : expect(isChiitoitsuTenPai(input)).toBeFalsy();
      });
    }
  );
});
