import { isKokushiMusou } from "../maj";
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
});
