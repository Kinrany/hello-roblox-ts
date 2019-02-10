const s: unique symbol = Symbol();

export interface Grid {
  [s]: true;
}

export type Position = Grid & [number, number];
export function position(x: number, y: number): Position {
  return [x, y] as Position;
}

export const unit = 10;

export function to_workspace([x, y]: Position, height: number): Vector3 {
  return new Vector3(
    x * unit,
    height,
    y * unit,
  );
}
