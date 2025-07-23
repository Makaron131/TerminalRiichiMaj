import { ITestCase } from "@/types";

const getOrderCase = (title: string, card1: string, card2: string) => [
  {
    desc: `${title}正序`,
    input: [card1, card2],
    output: [card1, card2],
  },
  {
    desc: `${title}逆序`,
    input: [card2, card1],
    output: [card1, card2],
  },
];

export const SORT_CASE: ITestCase[] = [
  ...getOrderCase("万子", "1m", "2m"),
  ...getOrderCase("筒子", "1p", "2p"),
  ...getOrderCase("索子", "1s", "2s"),
  ...getOrderCase("万筒", "1m", "1p"),
  ...getOrderCase("筒索", "1p", "1s"),
  ...getOrderCase("万索", "1m", "1s"),
];
