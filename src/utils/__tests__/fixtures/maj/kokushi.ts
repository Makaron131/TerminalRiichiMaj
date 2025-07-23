import { NON_YAO_CHUU_CARDS, YAO_CHUU_CARDS } from "@/constants";
import { ITestCase, TehaiAfterDraw } from "@/types";

export const KOKUSHI_CASE: ITestCase[] = [
  ...YAO_CHUU_CARDS.map((card) => ({
    desc: card,
    input: [...YAO_CHUU_CARDS, card] as TehaiAfterDraw,
    output: true,
  })),
  ...NON_YAO_CHUU_CARDS.map((card) => ({
    desc: card,
    input: [...YAO_CHUU_CARDS, card] as TehaiAfterDraw,
    output: false,
  })),
];
