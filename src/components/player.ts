import { TEHAI_LENGTH } from "@/constants";
import { Wall } from "./wall";
import { colorizeCard, sortMJFn } from "@/utils";

export class Player {
  private tehai: string[] = [];
  private tehaiAfterDraw: string[] = [];
  private wall: Wall;

  constructor(wall: Wall) {
    this.wall = wall;
  }

  draw() {
    const card = this.wall.draw();

    if (!card) {
      return;
    }

    this.getTehaiAfterDraw().push(card);
    this.getTehaiAfterDraw().sort(sortMJFn);
    if (this.getTehai().length < TEHAI_LENGTH) {
      this.getTehai().push(card);
      this.getTehai().sort(sortMJFn);
    }

    return card;
  }

  discard(card: string) {
    const tehaiAfterDraw = this.getTehaiAfterDraw();

    const index = tehaiAfterDraw.findIndex((v) => v === card);
    tehaiAfterDraw.splice(index, 1);

    const tehaiAfterDiscard = [...tehaiAfterDraw];

    this.setTehai(tehaiAfterDiscard);
  }

  showTehai() {
    const colorizedTehai = this.getTehai().map((card) => colorizeCard(card));
    console.log(`\n${colorizedTehai.toString()}`);
  }

  private setTehai(tehai: string[]) {
    this.tehai = tehai;
  }

  getTehai() {
    return this.tehai;
  }

  getTehaiAfterDraw() {
    return this.tehaiAfterDraw;
  }
}
