import * as grid from './grid';

export interface Params {
  pos: grid.Position;
  color: Color3;
}

const part_height = 2;

export function create({pos, color}: Params): Part {
  const tile = new Instance('Part');
  tile.Name = 'Tile';
  tile.Color = color;
  tile.Size = new Vector3(grid.unit, part_height, grid.unit);
  tile.Anchored = true;
  tile.Position = grid.to_workspace(pos);
  return tile;
}

export default create;
