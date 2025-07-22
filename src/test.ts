import { Player } from "./components/player";
import { Wall } from "./components/wall";
import { TEHAI_AFTER_DRAW_LENGTH } from "./constants";
import { Tehai, TehaiAfterDraw } from "./types";
import {
  canWin,
  colorizeCard,
  draw,
  generateInitialTehai,
  generateTehaiAfterDraw,
  quest,
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

export const drawGame = async () => {
  const wall = new Wall();
  const player = new Player(wall);
  wall.initWall();

  let card: string | undefined;
  while (
    player.getTehai().length < TEHAI_AFTER_DRAW_LENGTH ||
    wall.getLiveWall().length > 0
  ) {
    card = player.draw();

    if (card && player.getTehaiAfterDraw().length === TEHAI_AFTER_DRAW_LENGTH) {
      const tehaiAfterDraw = player.getTehaiAfterDraw() as TehaiAfterDraw;
      if (canWin(tehaiAfterDraw)) {
        player.showTehai();
        console.log(`Tsu mo: ${colorizeCard(card)}`);
        let result = await quest(`oh, you can win!(tsu mo):`);
        while (result !== "tsu mo") {
          player.showTehai();
          console.log(`Tsu mo: ${colorizeCard(card)}`);
          result = await quest(`\noh, you can win!(tsu mo):`);
        }
        console.log("You win.");
        break;
      }

      player.showTehai();
      console.log(`Tsu mo: ${colorizeCard(card)}`);
      let discardCard;
      while (
        !discardCard ||
        !player.getTehaiAfterDraw().includes(discardCard)
      ) {
        discardCard = await quest(`\ndiscard your card:`);
      }
      player.discard(discardCard);
    }
  }

  if (!wall.getLiveWall().length) console.log("Exhaustive draw.");
};
