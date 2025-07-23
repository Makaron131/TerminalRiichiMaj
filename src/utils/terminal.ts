import * as readline from "readline/promises";
import { CardTypes } from "@/constants";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const quest = async (problem: string) => {
  return rl.question(problem);
};

export const colorizeCard = (card: string) => {
  if (card.includes(CardTypes.M) || card === `7${CardTypes.Z}`) {
    return chalk.red(card);
  } else if (card.includes(CardTypes.P)) {
    return chalk.blue(card);
  } else if (card.includes(CardTypes.S) || card === `6${CardTypes.Z}`) {
    return chalk.green(card);
  }

  return card;
};
