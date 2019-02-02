const s: unique symbol = Symbol();

export interface Grid {
  [s]: true;
}

export type Position = Grid & [number, number];
export function position(x: number, y: number): Position {
  return [x, y] as Position;
}

export const grid_scale = 20;
export const grid_height = 0;

export function to_workspace([x, y]: Position): Vector3 {
  return new Vector3(
    x * grid_scale,
    grid_height,
    y * grid_scale,
  );
}
