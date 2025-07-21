import { CardTypes } from "./constants";

export type FixedLengthArray<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _FixedLengthArray<T, N, []>
  : never;

type _FixedLengthArray<
  T,
  N extends number,
  R extends unknown[]
> = R["length"] extends N ? R : _FixedLengthArray<T, N, [T, ...R]>;

export type Sequence = FixedLengthArray<string, 3>;

export type Pair = FixedLengthArray<string, 2>;

export type Tehai = FixedLengthArray<string, 13>;

export type TehaiAfterDraw = FixedLengthArray<string, 14>;

export type ECardTypes = (typeof CardTypes)[keyof typeof CardTypes];
