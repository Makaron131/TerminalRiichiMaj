import { TEHAI_AFTER_DRAW_LENGTH } from "./constants";
import { Tehai, TehaiAfterDraw } from "./types";
import {
  canWin,
  draw,
  generateInitialTehai,
  generateTehaiAfterDraw,
  tenPai,
} from "./utils";

// 测试100w次能不能出一次天胡
export const tenHouTest = () => {
  for (let i = 0; i < 1000000; i++) {
    const tehaiAfterDraw = generateTehaiAfterDraw();
    if (canWin(tehaiAfterDraw)) {
      console.log(`No.${i} tehai after draw: ${tehaiAfterDraw}`);
      break;
    }
  }
};

// 测试 10w 次能不能出一次地胡机会，大概能有5次
export const chiHouChanceTest = () => {
  for (let i = 0; i < 100000; i++) {
    const tehai = generateInitialTehai();
    const tenPaiCards = tenPai(tehai);
    if (tenPaiCards.length > 0) {
      console.log(`No.${i} tehai: ${tehai}`);
      console.log(`TenPai: ${tenPaiCards}`);
    }
  }
};

// 10w 次一把地胡，都可能没有
export const chiHouTest = () => {
  for (let i = 0; i < 100000; i++) {
    const tehai = generateInitialTehai();
    const tenPaiCards = tenPai(tehai);
    if (tenPaiCards.length > 0) {
      console.log(`No.${i} tehai: ${tehai}`);
      console.log(`TenPai: ${tenPaiCards}`);

      const card = draw(tehai);
      console.log(`Draw: ${card}`);
      const tehaiAfterDraw = [...tehai, card] as TehaiAfterDraw;

      console.log(
        `${
          canWin(tehaiAfterDraw) ? "Tsu mo" : "Double reach"
        }: ${tehai}, ${card}\n`
      );
    }
  }
};

export const doubleReachTest = () => {
  for (let i = 0; i < 10000; i++) {
    const tehai = generateInitialTehai();
    // const tenPaiCards = tenPai(tehai);

    // if (tenPaiCards.length > 0) {
    //   console.log(`Chi hou chance, TenPai: ${tenPaiCards}`);
    // }

    const card = draw(tehai);
    // console.log(`Draw: ${card}`);
    const tehaiAfterDraw = [...tehai, card] as TehaiAfterDraw;

    if (canWin(tehaiAfterDraw)) {
      console.log(`No.${i} tehai: ${tehai}`);
      console.log(`Ten pai: ${tenPai(tehai)}`);
      console.log(`Tsu mo, chi hou: ${tehai}, ${card}\n`);
    } else {
      let showTeHai = false;

      for (let j = 0; j < TEHAI_AFTER_DRAW_LENGTH; j++) {
        const tmp = [...tehaiAfterDraw];
        tmp.splice(j, 1);
        const tmpAfterDiscard = [...tmp] as Tehai;
        const tenPaiCards = tenPai(tmpAfterDiscard);
        if (tenPaiCards.length > 0) {
          if (!showTeHai) {
            console.log(`\nNo.${i} tehai: ${tehai}`);
            console.log(`Draw: ${card}`);
            showTeHai = true;
          }
          console.log(`Double reach: ${tmp}, ${tehaiAfterDraw[j]}`);
          console.log(`Ten pai: ${tenPaiCards}`);
        }
      }
    }
  }
};

// TODO: play，通过 terminal 交互实现 play
