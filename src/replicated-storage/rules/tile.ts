import { Position } from 'replicated-storage/grid';

export default interface Tile {
  readonly color: Color3;
  readonly position: Position;
}

export const _ = {};
