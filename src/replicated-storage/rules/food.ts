import { Position } from 'replicated-storage/grid';

export default interface Food {
  readonly color: Color3;
  readonly position: Position;
}

export const _ = {};
