import {
  DEAD_WALL_LENGTH,
  DEFAULT_ALL_CARDS,
  DORA_INDICATOR_POSITION,
} from "../constants";
import { FisherYatesShuffle } from "../utils";

export class Wall {
  private liveWall: string[] = [];
  private deadWall: string[] = [];

  //   private doraIndicators: string[] = [];
  //   private dora: string[] = [];

  constructor() {
    this.resetWall();
  }

  private resetWall() {
    this.setLiveWall([]);
    this.setDeadWall([]);
    // this.setDoraIndicators([]);
    // this.setDora([]);
  }

  initWall() {
    const initialWall = FisherYatesShuffle(DEFAULT_ALL_CARDS);

    this.setDeadWall(
      initialWall.splice(
        initialWall.length - DEAD_WALL_LENGTH,
        DEAD_WALL_LENGTH
      )
    );

    // this.addDoraIndicator(this.deadWall[DORA_INDICATOR_POSITION]);

    this.setLiveWall([...initialWall]);
  }

  draw() {
    return this.getLiveWall().pop();
  }

  private setLiveWall(wall: string[]) {
    this.liveWall = wall;
  }

  getLiveWall() {
    return this.liveWall;
  }

  private setDeadWall(wall: string[]) {
    this.deadWall = wall;
  }

  getDeadWall() {
    return this.deadWall;
  }

  //   private addDoraIndicator(card: string) {
  //     this.doraIndicators.push(card);
  //     this.addDora(`${(parseInt(card[0]) % 9) + 1}${card[1]}`);
  //   }

  //   private setDoraIndicators(cards: string[]) {
  //     this.doraIndicators = cards;
  //   }

  //   private getDoraIndicators() {
  //     return this.doraIndicators;
  //   }

  //   private addDora(card: string) {
  //     this.dora.push(card);
  //   }

  //   private setDora(cards: string[]) {
  //     this.dora = cards;
  //   }

  //   private getDora() {
  //     return this.dora;
  //   }
}
